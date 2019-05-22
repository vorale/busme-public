import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ModalModule} from "ng2-modal";
import { Pipe, PipeTransform } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'
import {DomSanitizer} from "@angular/platform-browser";
import {Location} from '@angular/common';
import { MatSnackBar, MdSnackBarConfig, Directionality } from '@angular/material';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Direction } from 'ngx-bootstrap/carousel/carousel.component';
import { Twilio } from 'twilio';

@Component({
  selector: 'app-msg-detail',
  templateUrl: './msg-detail.component.html',
  styleUrls: ['./msg-detail.component.css']
})
export class MsgDetailComponent implements OnInit {

  private data: string;
  private parsedData: any;
  private msg: string;
  private url: string;
  confirmation: string;
  
  constructor(private _location: Location, private http: HttpClient, private activatedRoute: ActivatedRoute, private domSanitizer : DomSanitizer, private router: Router, private snackBar: MatSnackBar) 
  {
    
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.data = params['data'];
      console.log(this.data);

      this.parsedData = JSON.parse(this.data);

      var destQueryString = this.parsedData.DAddress.replace(/\s+/g, '+') + "+" + this.parsedData.DCity.replace(/\s+/g, '+') + "+" + this.parsedData.DState.replace(/\s+/g, '+') + '+' + this.parsedData.DZip.replace(/\s+/g, '+');
      var originQueryString = this.parsedData.Address.replace(/\s+/g, '+') + "+" + this.parsedData.City.replace(/\s+/g, '+') + "+" + this.parsedData.State.replace(/\s+/g, '+') + '+' + this.parsedData.Zip.replace(/\s+/g, '+');
      var baseUrl = "https://www.google.com/maps/embed/v1/directions?key=AIzaSyBuT01K3jTRqK_bsZYIsPDKMJy2gLXh79g&mode=transit&origin=";
      this.url = baseUrl + originQueryString + "&destination=" + destQueryString;
      
      this.http.post("http://localhost:3000/direction", this.parsedData).subscribe(
        (data : any) => {
          this.msg = data.msg;
        }
      );
    });
  }

  navigateToPrevious()
  {
    this._location.back();
  }
  
  sendTwilioSMS() {
    this.http.post("http://localhost:3000/twiliosms", {
        body: this.msg,
        to: this.replaceAll(this.parsedData.Phone, '-', '')
      }).map((res: Response) => {
        if (res) {
            if (res.status === 201) {
                return [{ status: res.status, json: res }]
            }
            else if (res.status === 200) {
                return [{ status: res.status, json: res }]
            }
        }
    }).catch((error: any) => {
        if (error.status < 400 ||  error.status ===500) {
            return Observable.throw(new Error(error.status));
        }
    })
    .subscribe(res => {
        this.confirmation = 'SMS has been sent to the patient.'; 
      },
      err => {
        this.confirmation = 'SMS has been sent to the patient.'; 
        console.log(err);
      } );
  }

  sendSMS() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(decodeURIComponent(encodeURIComponent('t-ou5nt7kotjqkjioefjbtbsa:kmwf2ruyaapjojiov5qsjpkm5iky3ob7uutbmlq')))
      })
    };

    this.http.post("https://api.catapult.inetwork.com/v1/users/u-ho42wyzz63f72db6klvytli/messages?", {
      from: "+12486023111",
      to: this.replaceAll(this.parsedData.Phone, '-', ''),
      "text": this.msg
    }, httpOptions).map((res: Response) => {
      if (res) {
          if (res.status === 201) {
              return [{ status: res.status, json: res }]
          }
          else if (res.status === 200) {
              return [{ status: res.status, json: res }]
          }
      }
  }).catch((error: any) => {
      if (error.status < 400 ||  error.status ===500) {
          return Observable.throw(new Error(error.status));
      }
  })
  .subscribe(res => {
      this.confirmation = 'SMS has been sent to the patient.'; 
    },
    err => {
      this.confirmation = 'SMS has been sent to the patient.'; 
      console.log(err);
    } );
  }

  replaceAll(base, search, replacement) {
    return base.replace(new RegExp(search, 'g'), replacement);
  }
}
