import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.css']
})
export class FileManagerComponent implements OnInit {

  // displayedColumns = ['fileName', 'uploadDate', 'uploadBy', 'isProcessed', 'SendSms', 'DeleteFile'];
  displayedColumns = ['fileName', 'uploadDate', 'uploadBy', 'DeleteFile'];
  data: Array<FileMeta>;
  dataSource: FileDataSource;
  database: FileDatabase;

  @ViewChild('filter') filter: ElementRef;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {

    this.database = new FileDatabase(this.http);

    this.dataSource = new FileDataSource(this.database, this.http);

    Observable.fromEvent(this.filter.nativeElement, 'keyup')
    .debounceTime(150)
    .distinctUntilChanged()
    .subscribe(() => {
      if (!this.dataSource) { return; }
      this.dataSource.filter = this.filter.nativeElement.value;
    });
  }

  sendFile(file: FileMeta) {
    this.http.get("http://localhost:3000/address?token=" + file.fileName).toPromise().then(
      (data : FileContent[]) => {
        console.log(data);
        const copiedData = data.slice();
        for(let appt of data)
        {
          copiedData.push(appt);
          this.http.post("http://localhost:3000/sms", { "log" : appt }).toPromise().then();
        }
      }
    );
  }

  deleteFile(file: FileMeta)
  {
    this.http.post("http://localhost:3000/deleteFile", { fileName : file.fileName }).subscribe(
      res => {
        console.log(res);
        window.location.reload();
      },
      err => {
        console.log("Error occured");
        window.location.reload();
      }
    );
  }
}

export interface FileMeta {
  originalName: string,
  fileName: string,
  uploadDate: Date,
  uploadBy: string,
  isProcessed: boolean
}

export class FileDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<FileMeta[]> = new BehaviorSubject<FileMeta[]>([]);
  get data(): FileMeta[] { return this.dataChange.value; }

  constructor(private http: HttpClient) {
    this.prepareFileData(http);
  }

  prepareFileData(http: HttpClient) {
    http.get("http://localhost:3000/currenttokens").subscribe((data : FileMeta[]) => {
      console.log(data);
      const copiedData = this.data.slice();
      for(let file of data)
      {
        copiedData.push(file);
      }
      this.dataChange.next(copiedData);
    });
  }
}

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export class FileDataSource extends DataSource<any> {
  _filterChange = new BehaviorSubject('');
  get filter(): string { return this._filterChange.value; }
  set filter(filter: string) { this._filterChange.next(filter); }

  constructor(private database: FileDatabase, private http: HttpClient) {
    super();
  }
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<FileMeta[]> {
    const displayDataChanges = [
      this.database.dataChange,
      this._filterChange,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      return this.database.data.slice().filter((item: FileMeta) => {
        let searchStr = (item.originalName + item.uploadBy).toLowerCase();
        return searchStr.indexOf(this.filter.toLowerCase()) != -1;
      });
    });
  }

  disconnect() {}

  
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