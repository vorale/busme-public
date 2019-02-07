import { Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.css']
})
export class DirectionComponent implements OnInit {
  @ViewChild('iframe') iframe: ElementRef;

  private originQueryString: string;
  private destQueryString: string;
  private url : string;
  private mapUrl : any;
  private fetchedHtml: string;


  constructor() { 
    
    // this.originQueryString = this.origin.Address + "+" + this.origin.City + "+" + this.origin.State;
    this.destQueryString = "5555+Conner+St+Detroit+MI+48213";

    this.url = "https://www.google.com/maps/embed/v1/directions?key=AIzaSyBuT01K3jTRqK_bsZYIsPDKMJy2gLXh79g&mode=transit&origin="
    + this.originQueryString + "&destination=" + this.destQueryString;
  }

  ngOnInit() {
  }
}

export interface FileContent {
  Date: string,
  Time: string,
  Address: string,
  City: string,
  State: string,
  Zip: string,
  Phone: string
  DAddress: string,
  DCity: string,
  DState: string,
  DZip: string
}