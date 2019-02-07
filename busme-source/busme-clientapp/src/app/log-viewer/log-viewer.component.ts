import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {ModalModule} from "ng2-modal";
import { Pipe, PipeTransform } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'
import {DomSanitizer} from "@angular/platform-browser";
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-log-viewer',
  templateUrl: './log-viewer.component.html',
  styleUrls: ['./log-viewer.component.css']
})
export class LogViewerComponent implements OnInit {

  displayedColumns = ['DateSent', 'Date', 'Time', 'Address', 'City', 'State', 'Zip', 'Phone', 'Detail'];
  data: Array<FileContent>;
  dataSource: FileviewDataSource;
  database: FileviewDatabase;
  token: string;

  @ViewChild('filter') filter: ElementRef;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private domSanitizer : DomSanitizer, private router: Router) {
  }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.token = params['token'];
      console.log(this.token);

      this.database = new FileviewDatabase(this.http, this.token);
      this.dataSource = new FileviewDataSource(this.database);
  
      Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) { return; }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
    });
  }

  onClickSend(content: FileContent)
  {
    console.log(content);
    this.http.post("http://localhost:3000/direction", content).subscribe();
  }

  redirectToMsgDetail(content: FileContent)
  {
      var qs = JSON.stringify(content);
      this.router.navigateByUrl("/msg-detail?data=" + qs);
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
}

export class FileviewDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<FileContent[]> = new BehaviorSubject<FileContent[]>([]);
  get data(): FileContent[] { return this.dataChange.value; }

  constructor(private http: HttpClient, private token: string) {
    this.prepareFileData(http);
  }

  prepareFileData(http: HttpClient) {
    const copiedData = [];
    copiedData.push(
    {
      DateSent: "2017/11/08",
      Date: "2017/11/30",
      Address: "42 W Warren Ave",
      City: "Detroit",
      State: "MI",
      Zip: "48202",
      Phone: "248-787-0288" 
    });

    
      this.dataChange.next(copiedData);
  }
}

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export class FileviewDataSource extends DataSource<any> {
  _filterChange = new BehaviorSubject('');
  get filter(): string { return this._filterChange.value; }
  set filter(filter: string) { this._filterChange.next(filter); }

  constructor(private database: FileviewDatabase) {
    super();
  }
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<FileContent[]> {
    const displayDataChanges = [
      this.database.dataChange,
      this._filterChange,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      return this.database.data.slice().filter((item: FileContent) => {
        let searchStr = (item.Address + item.City + item.Phone).toLowerCase();
        return searchStr.indexOf(this.filter.toLowerCase()) != -1;
      });
    });
  }

  disconnect() {}
}