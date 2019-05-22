import * as express from 'express'
import * as multer from 'multer'
import * as cors from 'cors'
import * as fs from 'fs'
import * as path from 'path'
import * as Loki from 'lokijs'
import * as parse from 'csv-parse/lib/sync'
import * as request from 'request'
import * as maps from '@google/maps'
import * as htmlToText from 'html-to-text'
import * as bodyParser from 'body-parser'
import * as moment from 'moment'
import {Twilio} from 'twilio'
import {
  loadCollection
} from './utils';

// setup
const DB_NAME = 'db.json';
const COLLECTION_NAME = 'appointments';
const UPLOAD_PATH = 'uploads';
const upload = multer({ dest: `${UPLOAD_PATH}/` }); // multer configuration
const db = new Loki(`${UPLOAD_PATH}/${DB_NAME}`, { persistenceMethod: 'fs' });

const DB_NAME2 = 'db.json2';
const COLLECTION_NAME2 = 'logs';
const db2 = new Loki(`${UPLOAD_PATH}/${DB_NAME2}`, { persistenceMethod: 'fs' });


var whitelist = ['http://localhost:4200', 'http://localhost:3000', 'http://localhost', 'http://localhost:8080'];
var corsOptions = {
  origin: (origin, callback) => {
    console.log(origin);
    if (whitelist.indexOf(origin) !== -1) {
      console.log(origin);
      callback(null, true)
    } else {
      console.log(origin);
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true
}

// app
const app = express();
app.use(cors(corsOptions));

app.use((req,res,next) => {
  console.log(req.headers.Host); // undefined
  next();
})

app.use(bodyParser.json({ type: 'application/json' }));

app.post('/appointment', upload.any(), async (req, res) => {
  try {
      const col = await loadCollection(COLLECTION_NAME, db);
      console.log(req.files);
      const data = col.insert(req.files);

      db.saveDatabase();
      res.send({ id: data.$loki, fileName: data.filename, originalName: data.originalname });
  } catch (err) {
      console.log(err);
      res.sendStatus(400);
  }
});

app.get('/currenttokens', async (req, res) => {
  try 
  {
      const col = await loadCollection(COLLECTION_NAME, db);
      const files = col.findObjects({});
      const currentFiles = new Array<any>();

      if (files != null)
      {
        for (let file of files)
        {
          var stats = fs.statSync(path.join(__dirname, "../" + file.path));
          currentFiles.push(
            { uploadDate: file.meta.created,
              uploadBy: "administrator",
              originalName: file.originalname,
              fileName: file.filename,
              isProcessed: false
            }
          );
          console.log(file);
        }
        console.log(currentFiles);
        res.send(currentFiles);
      }else{
        res.sendStatus(400);
      }
  } catch (err) {
      console.log(err);
      res.sendStatus(400);
  }
});

app.get('/address', async (req, res) => {
  try 
  {
      const filename = req.query.token;
      const col = await loadCollection(COLLECTION_NAME, db);
      const file = col.findOne({ filename : { $eq: filename } });

      if (file != null)
      {
          var str = fs.readFileSync(path.join(__dirname, "../" + file.path), 'utf-8');
          
          console.log(str);
          str = str.replace("Appt Type", "Type");
          str = str.replace("Pat Address1", "Address");
          str = str.replace("Pat City", "City");
          str = str.replace("Pat State", "State");
          str = str.replace("Pat Zip5", "Zip");
          str = str.replace("Home Phone", "Phone");
          str = str.replace("Dest Address1", "DAddress");
          str = str.replace("Dest City", "DCity");
          str = str.replace("Dest State", "DState");
          str = str.replace("Dest Zip5", "DZip");
          
          console.log(str);

          var data = parse(str, {columns: true});
          console.log(data);
          res.send(data);
      }else{
        res.sendStatus(400);
      }
  } catch (err) {
      console.log(err);
      res.sendStatus(400);
  }
});

app.post('/sms', async (req: any, res: any) => {
  try {
    const col = await loadCollection(COLLECTION_NAME2, db2);
    console.log(JSON.stringify(req.log));
    const data = col.insert(req.log);

    db.saveDatabase();
    res.send({ id: data.$loki, log: req.log });
  } catch (err) {
      console.log(err);
      res.sendStatus(400);
  }
});

app.post('/twiliosms', async (req: any, res: any) => {
  try {
    let accountSid = 'AC3ba26734faf6b682464066799ddfde45';
    let authToken = '7fe72c97fc3b084236cea2df5f2fcff1';
    
    let client = new Twilio(accountSid, authToken);
    client.messages.create({
      body: req.body.body,
      from: '+12486716109',
      to: req.body.to
    });

    res.send({ msg: 'success' });
  } catch (err) {
      console.log(err);
      res.sendStatus(400);
  }
});

app.post('/logging', async (req: any, res: any) => {
  try {
    const col = await loadCollection(COLLECTION_NAME2, db2);
    console.log(JSON.stringify(req.log));
    const data = col.insert(req.log);

    db.saveDatabase();
    res.send({ id: data.$loki, log: req.log });
  } catch (err) {
      console.log(err);
      res.sendStatus(400);
  }
});

app.post('/deleteFile', async (req: any, res: any) => {
  try {
    console.log(req.body.filename);

    const col = await loadCollection(COLLECTION_NAME, db);
    var file = col.findOne({"filename": req.body.fileName});
    if (file != null)
    {
      col.remove(file);
      db.saveDatabase();  
    }
    
    res.send(file);
  } catch (err) {
      console.log(err);
      res.sendStatus(400);
  }
});

app.post('/direction', async (req, res) => {
  try 
  {
      console.log(req);
      const content = req.body;
      const origin = content.Address + ", " + content.City + ", " + content.State + " " + content.Zip;
      const destination = content.DAddress + ", " + content.DCity + ", " + content.DState + " " + content.DZip;
      var arrivalTime = content.Date + " " + content.Time;
      const timestamp = new Date(arrivalTime).getTime()/1000;
      
      const url = "https://maps.googleapis.com/maps/api/directions/";

      var client = maps.createClient({
        key: "AIzaSyBOPh42U938juiYkiJ9nhzjWWN8PGJTZqU"
      });

      client.directions({
        origin: origin
        ,destination: destination
        ,mode: "transit"
        ,arrival_time: timestamp
      },
        (err, response) => {
          console.log("*************");
          console.log(JSON.stringify(response));
          console.log("*************");
          var seqNum = 1;
          var directionList = new Array<string>();
          var curDirection = "";
          var result = "Please Leave at " + response.json.routes[0].legs[0].departure_time.text + " ";
          if (!err && response != null && response.json != null && response.json.routes != null)
          {
            var route = response.json.routes[0].legs[0].steps;
            console.log(route);
            for (let entry of route) {
              if (entry.travel_mode == "TRANSIT")
              {
                curDirection = entry.transit_details.line.short_name + " " + entry.html_instructions + " for " + entry.transit_details.num_stops + " stops";
                directionList.push(curDirection);
                console.log(curDirection);
              }
              else if (entry.travel_mode == "WALKING")
              {
                if (entry.steps != null && entry.steps.length > 0)
                {
                  for (let subStep of entry.steps)
                  {
                    curDirection = htmlToText.fromString(subStep.html_instructions) + ", walk for " + subStep.duration.text
                    directionList.push(curDirection);
                    console.log(curDirection);
                  }
                }else{
                  curDirection = htmlToText.fromString(entry.html_instructions) + " for " + entry.duration.text
                  directionList.push(curDirection);
                  console.log(curDirection);
                }
              }
            }
          }
          for (let dir of directionList)
          {
            result += seqNum + ". " + dir + ". ";
            seqNum++;
          }

          result = result.replace(/([A-Z])/g, ' $1').trim();
          console.log(result);
          res.send({ "msg": result});
        }
      );
  } catch (err) {
      console.log(err);
      res.sendStatus(400);
  }
})

app.listen(3000, function () {
    console.log('listening on port 3000!');
});