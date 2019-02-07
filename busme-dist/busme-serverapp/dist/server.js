"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const Loki = require("lokijs");
const parse = require("csv-parse/lib/sync");
const maps = require("@google/maps");
const htmlToText = require("html-to-text");
const bodyParser = require("body-parser");
const utils_1 = require("./utils");
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
            callback(null, true);
        }
        else {
            console.log(origin);
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
};
// app
const app = express();
app.use(cors(corsOptions));
app.use((req, res, next) => {
    console.log(req.headers.Host); // undefined
    next();
});
app.use(bodyParser.json({ type: 'application/json' }));
app.post('/appointment', upload.any(), (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const col = yield utils_1.loadCollection(COLLECTION_NAME, db);
        console.log(req.files);
        const data = col.insert(req.files);
        db.saveDatabase();
        res.send({ id: data.$loki, fileName: data.filename, originalName: data.originalname });
    }
    catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
}));
app.get('/currenttokens', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const col = yield utils_1.loadCollection(COLLECTION_NAME, db);
        const files = col.findObjects({});
        const currentFiles = new Array();
        if (files != null) {
            for (let file of files) {
                var stats = fs.statSync(path.join(__dirname, "../" + file.path));
                currentFiles.push({ uploadDate: file.meta.created,
                    uploadBy: "administrator",
                    originalName: file.originalname,
                    fileName: file.filename,
                    isProcessed: false
                });
                console.log(file);
            }
            console.log(currentFiles);
            res.send(currentFiles);
        }
        else {
            res.sendStatus(400);
        }
    }
    catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
}));
app.get('/address', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const filename = req.query.token;
        const col = yield utils_1.loadCollection(COLLECTION_NAME, db);
        const file = col.findOne({ filename: { $eq: filename } });
        if (file != null) {
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
            var data = parse(str, { columns: true });
            console.log(data);
            res.send(data);
        }
        else {
            res.sendStatus(400);
        }
    }
    catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
}));
app.post('/sms', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const col = yield utils_1.loadCollection(COLLECTION_NAME2, db2);
        console.log(JSON.stringify(req.log));
        const data = col.insert(req.log);
        db.saveDatabase();
        res.send({ id: data.$loki, log: req.log });
    }
    catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
}));
app.post('/logging', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const col = yield utils_1.loadCollection(COLLECTION_NAME2, db2);
        console.log(JSON.stringify(req.log));
        const data = col.insert(req.log);
        db.saveDatabase();
        res.send({ id: data.$loki, log: req.log });
    }
    catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
}));
app.post('/deleteFile', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        console.log(req.body.filename);
        const col = yield utils_1.loadCollection(COLLECTION_NAME, db);
        var file = col.findOne({ "filename": req.body.fileName });
        if (file != null) {
            col.remove(file);
            db.saveDatabase();
        }
        res.send(file);
    }
    catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
}));
app.post('/direction', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        console.log(req);
        const content = req.body;
        const origin = content.Address + ", " + content.City + ", " + content.State + " " + content.Zip;
        const destination = content.DAddress + ", " + content.DCity + ", " + content.DState + " " + content.DZip;
        var arrivalTime = content.Date + " " + content.Time;
        const timestamp = new Date(arrivalTime).getTime() / 1000;
        const url = "https://maps.googleapis.com/maps/api/directions/";
        var client = maps.createClient({
            key: "AIzaSyBOPh42U938juiYkiJ9nhzjWWN8PGJTZqU"
        });
        client.directions({
            origin: origin,
            destination: destination,
            mode: "transit",
            arrival_time: timestamp
        }, (err, response) => {
            console.log("*************");
            console.log(JSON.stringify(response));
            console.log("*************");
            var seqNum = 1;
            var directionList = new Array();
            var curDirection = "";
            var result = "Please Leave at " + response.json.routes[0].legs[0].departure_time.text + " ";
            if (!err && response != null && response.json != null && response.json.routes != null) {
                var route = response.json.routes[0].legs[0].steps;
                console.log(route);
                for (let entry of route) {
                    if (entry.travel_mode == "TRANSIT") {
                        curDirection = entry.transit_details.line.short_name + " " + entry.html_instructions + " for " + entry.transit_details.num_stops + " stops";
                        directionList.push(curDirection);
                        console.log(curDirection);
                    }
                    else if (entry.travel_mode == "WALKING") {
                        if (entry.steps != null && entry.steps.length > 0) {
                            for (let subStep of entry.steps) {
                                curDirection = htmlToText.fromString(subStep.html_instructions) + ", walk for " + subStep.duration.text;
                                directionList.push(curDirection);
                                console.log(curDirection);
                            }
                        }
                        else {
                            curDirection = htmlToText.fromString(entry.html_instructions) + " for " + entry.duration.text;
                            directionList.push(curDirection);
                            console.log(curDirection);
                        }
                    }
                }
            }
            for (let dir of directionList) {
                result += seqNum + ". " + dir + ". ";
                seqNum++;
            }
            result = result.replace(/([A-Z])/g, ' $1').trim();
            console.log(result);
            res.send({ "msg": result });
        });
    }
    catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
}));
app.listen(3000, function () {
    console.log('listening on port 3000!');
});
//# sourceMappingURL=server.js.map