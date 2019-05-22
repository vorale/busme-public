webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media (max-width: 767px) {\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\n    .body-content {\n        padding-top: 50px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container-fluid'>\n  <div class='row'>\n      <div class='col-sm-3'>\n          <nav-menu></nav-menu>\n      </div>\n      <div class='col-sm-9 body-content'>\n          <router-outlet></router-outlet>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { AuthService } from './auth.service';
var AppComponent = /** @class */ (function () {
    // constructor(private authService: AuthService) {
    // }
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__appointment_create_appointment_create_component__ = __webpack_require__("../../../../../src/app/appointment-create/appointment-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nav_menu_nav_menu_component__ = __webpack_require__("../../../../../src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__direction_direction_component__ = __webpack_require__("../../../../../src/app/direction/direction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__file_manager_file_manager_component__ = __webpack_require__("../../../../../src/app/file-manager/file-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__fileview_fileview_component__ = __webpack_require__("../../../../../src/app/fileview/fileview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_modal__ = __webpack_require__("../../../../ng2-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ng2_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__msg_detail_msg_detail_component__ = __webpack_require__("../../../../../src/app/msg-detail/msg-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__log_viewer_log_viewer_component__ = __webpack_require__("../../../../../src/app/log-viewer/log-viewer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import { AUTH_PROVIDERS } from 'angular2-jwt';

















// import { CallbackComponent } from './callback/callback.component';
// import { AuthGuard } from './auth-guard.service';
// import { AuthService} from './auth.service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__appointment_create_appointment_create_component__["a" /* AppointmentCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_8__direction_direction_component__["a" /* DirectionComponent */],
                __WEBPACK_IMPORTED_MODULE_6__nav_menu_nav_menu_component__["a" /* NavMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_8__direction_direction_component__["a" /* DirectionComponent */],
                __WEBPACK_IMPORTED_MODULE_9__file_manager_file_manager_component__["a" /* FileManagerComponent */],
                __WEBPACK_IMPORTED_MODULE_14__fileview_fileview_component__["a" /* FileviewComponent */],
                __WEBPACK_IMPORTED_MODULE_14__fileview_fileview_component__["b" /* SafePipe */],
                __WEBPACK_IMPORTED_MODULE_16__msg_detail_msg_detail_component__["a" /* MsgDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_17__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_18__log_viewer_log_viewer_component__["a" /* LogViewerComponent */]
                // CallbackComponent,
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_15_ng2_modal__["ModalModule"],
                __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forRoot([
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'appointment-create', component: __WEBPACK_IMPORTED_MODULE_5__appointment_create_appointment_create_component__["a" /* AppointmentCreateComponent */] },
                    { path: 'direction', component: __WEBPACK_IMPORTED_MODULE_8__direction_direction_component__["a" /* DirectionComponent */] },
                    { path: 'file-manager', component: __WEBPACK_IMPORTED_MODULE_9__file_manager_file_manager_component__["a" /* FileManagerComponent */] },
                    { path: 'fileview', component: __WEBPACK_IMPORTED_MODULE_14__fileview_fileview_component__["a" /* FileviewComponent */] },
                    { path: 'msg-detail', component: __WEBPACK_IMPORTED_MODULE_16__msg_detail_msg_detail_component__["a" /* MsgDetailComponent */] },
                    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_17__login_login_component__["a" /* LoginComponent */] },
                    { path: 'log-viewer', component: __WEBPACK_IMPORTED_MODULE_18__log_viewer_log_viewer_component__["a" /* LogViewerComponent */] },
                    // { path: 'appointment-create', component: AppointmentCreateComponent, canActivate: [AuthGuard] },
                    // { path: 'direction', component: DirectionComponent, canActivate: [AuthGuard] },
                    // { path: 'file-manager', component: FileManagerComponent, canActivate: [AuthGuard] },
                    // { path: 'fileview', component: FileviewComponent, canActivate: [AuthGuard]},
                    // { path: 'callback', component: CallbackComponent},
                    { path: '**', redirectTo: 'home' }
                ]),
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["e" /* MdTableModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["c" /* MdFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["d" /* MdInputModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["b" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [
            //AUTH_PROVIDERS,
            // AuthService,
            // AuthGuard
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/appointment-create/appointment-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/appointment-create/appointment-create.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\n  .my-drop-zone { border: dotted 3px lightgray; }\n  .nv-file-over { border: dotted 3px red; } /* Default class applied to drop zones on over */\n  .another-file-over-class { border: dotted 3px green; }\n\n  html, body { height: 100%; }\n</style>\n\n<div class=\"container\">\n\n  <div class=\"navbar navbar-default\">\n      <div class=\"navbar-header\">\n          <a class=\"navbar-brand\" href>Appointment File Upload</a>\n      </div>\n  </div>\n\n  <div class=\"row\">\n\n      <div class=\"col-md-3\">\n\n          <h3>Select files</h3>\n\n          <!-- <div ng2FileDrop\n               [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\n               (fileOver)=\"fileOverBase($event)\"\n               [uploader]=\"uploader\"\n               class=\"well my-drop-zone\">\n              Base drop zone\n          </div>\n\n          <div ng2FileDrop\n               [ngClass]=\"{'another-file-over-class': hasAnotherDropZoneOver}\"\n               (fileOver)=\"fileOverAnother($event)\"\n               [uploader]=\"uploader\"\n               class=\"well my-drop-zone\">\n              Another drop zone\n          </div> -->\n\n          <!-- Multiple\n          <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple  /><br/> -->\n\n          <!-- Single -->\n          <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n      </div>\n\n      <div class=\"col-md-9\" style=\"margin-bottom: 40px\">\n\n          <h3>Upload queue</h3>\n          <p>Queue length: {{ uploader?.queue?.length }}</p>\n\n          <table class=\"table\">\n              <thead>\n              <tr>\n                  <th width=\"50%\">Name</th>\n                  <th>Size</th>\n                  <th>Progress</th>\n                  <th>Status</th>\n                  <th>Actions</th>\n              </tr>\n              </thead>\n              <tbody>\n              <tr *ngFor=\"let item of uploader.queue\">\n                  <td><strong>{{ item?.file?.name }}</strong></td>\n                  <td *ngIf=\"uploader.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n                  <td *ngIf=\"uploader.isHTML5\">\n                      <div class=\"progress\" style=\"margin-bottom: 0;\">\n                          <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\n                      </div>\n                  </td>\n                  <td class=\"text-center\">\n                      <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\n                      <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\n                      <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\n                  </td>\n                  <td nowrap>\n                      <button type=\"button\" class=\"btn btn-success btn-xs\"\n                              (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n                          <span class=\"glyphicon glyphicon-upload\"></span> Upload\n                      </button>\n                      <button type=\"button\" class=\"btn btn-warning btn-xs\"\n                              (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n                          <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\n                      </button>\n                      <button type=\"button\" class=\"btn btn-danger btn-xs\"\n                              (click)=\"item.remove()\">\n                          <span class=\"glyphicon glyphicon-trash\"></span> Remove\n                      </button>\n                  </td>\n              </tr>\n              </tbody>\n          </table>\n\n          <div>\n              <div>\n                  Queue progress:\n                  <div class=\"progress\" style=\"\">\n                      <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n                  </div>\n              </div>\n              <button type=\"button\" class=\"btn btn-success btn-s\"\n                      (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n                  <span class=\"glyphicon glyphicon-upload\"></span> Upload all\n              </button>\n              <button type=\"button\" class=\"btn btn-warning btn-s\"\n                      (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n                  <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel all\n              </button>\n              <button type=\"button\" class=\"btn btn-danger btn-s\"\n                      (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n                  <span class=\"glyphicon glyphicon-trash\"></span> Remove all\n              </button>\n          </div>\n\n      </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/appointment-create/appointment-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// const URL = '/api/';
var URL = 'http://localhost:3000/appointment/';
var AppointmentCreateComponent = /** @class */ (function () {
    function AppointmentCreateComponent() {
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({ url: URL });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
    }
    AppointmentCreateComponent.prototype.ngOnInit = function () {
    };
    AppointmentCreateComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    AppointmentCreateComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    AppointmentCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-appointment-create',
            template: __webpack_require__("../../../../../src/app/appointment-create/appointment-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/appointment-create/appointment-create.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppointmentCreateComponent);
    return AppointmentCreateComponent;
}());

//# sourceMappingURL=appointment-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/direction/direction.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/direction/direction.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  <iframe class=\"map-top\" width=\"598\" height=\"450\" src=\"https://www.google.com/maps/embed/v1/directions?key=AIzaSyBuT01K3jTRqK_bsZYIsPDKMJy2gLXh79g&mode=transit&origin=75+9th+Ave+New+York,+NY&destination=MetLife+Stadium+1+MetLife+Stadium+Dr+East+Rutherford,+NJ+07073\" allowfullscreen ></iframe>\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/direction/direction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DirectionComponent = /** @class */ (function () {
    function DirectionComponent() {
        // this.originQueryString = this.origin.Address + "+" + this.origin.City + "+" + this.origin.State;
        this.destQueryString = "5555+Conner+St+Detroit+MI+48213";
        this.url = "https://www.google.com/maps/embed/v1/directions?key=AIzaSyBuT01K3jTRqK_bsZYIsPDKMJy2gLXh79g&mode=transit&origin="
            + this.originQueryString + "&destination=" + this.destQueryString;
    }
    DirectionComponent.prototype.ngOnInit = function () {
    };
    var _a;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('iframe'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], DirectionComponent.prototype, "iframe", void 0);
    DirectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-direction',
            template: __webpack_require__("../../../../../src/app/direction/direction.component.html"),
            styles: [__webpack_require__("../../../../../src/app/direction/direction.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DirectionComponent);
    return DirectionComponent;
}());

//# sourceMappingURL=direction.component.js.map

/***/ }),

/***/ "../../../../../src/app/file-manager/file-manager.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Structure */\n.example-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    min-width: 300px;\n  }\n  \n  .example-header {\n    min-height: 64px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: baseline;\n        -ms-flex-align: baseline;\n            align-items: baseline;\n    padding: 8px 24px 0;\n    font-size: 20px;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n  }\n  \n  .mat-form-field {\n    font-size: 14px;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    margin-left: 32px;\n  }\n  \n  .mat-table {\n    overflow: auto;\n    min-height: 500px;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/file-manager/file-manager.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-header\">\n    <md-form-field floatPlaceholder=\"never\">\n      <input mdInput #filter placeholder=\"Filter file\">\n    </md-form-field>\n  </div>\n  \n  <md-table #table [dataSource]=\"dataSource\">\n\n    <ng-container mdColumnDef=\"fileName\">\n        <md-header-cell *mdHeaderCellDef> File Name </md-header-cell>\n        <md-cell *mdCellDef=\"let element\"> <a [routerLink]=\"['/fileview']\" [queryParams]=\"{token: element.fileName}\">{{element.originalName}}</a>  </md-cell>\n    </ng-container>\n\n    <ng-container mdColumnDef=\"uploadDate\">\n      <md-header-cell *mdHeaderCellDef> Date </md-header-cell>\n      <md-cell *mdCellDef=\"let element\"> {{element.uploadDate | date:short}} </md-cell>\n    </ng-container>\n\n    <ng-container mdColumnDef=\"uploadBy\">\n      <md-header-cell *mdHeaderCellDef> Upload By </md-header-cell>\n      <md-cell *mdCellDef=\"let element\"> {{element.uploadBy}} </md-cell>\n    </ng-container>\n\n    <!-- <ng-container mdColumnDef=\"isProcessed\">\n      <md-header-cell *mdHeaderCellDef> Processed </md-header-cell>\n      <md-cell *mdCellDef=\"let element\"> {{element.isProcessed}} </md-cell>\n    </ng-container> -->\n\n    <!-- <ng-container mdColumnDef=\"SendSms\">\n      <md-header-cell *mdHeaderCellDef> Send SMS </md-header-cell>\n      <md-cell *mdCellDef=\"let element\" >\n          <button md-raised-button (click)=\"sendFile(element)\">Send SMS</button> \n     </md-cell>\n    </ng-container> -->\n\n    <ng-container mdColumnDef=\"DeleteFile\">\n        <md-header-cell *mdHeaderCellDef> Delete This File </md-header-cell>\n        <md-cell *mdCellDef=\"let element\" >\n            <button md-raised-button (click)=\"deleteFile(element)\">Delete</button> \n       </md-cell>\n      </ng-container>\n\n    <md-header-row *mdHeaderRowDef=\"displayedColumns\"></md-header-row>\n    <md-row *mdRowDef=\"let row; columns: displayedColumns;\"></md-row>\n  </md-table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/file-manager/file-manager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileManagerComponent; });
/* unused harmony export FileDatabase */
/* unused harmony export FileDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_toPromise__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var FileManagerComponent = /** @class */ (function () {
    function FileManagerComponent(http) {
        this.http = http;
        // displayedColumns = ['fileName', 'uploadDate', 'uploadBy', 'isProcessed', 'SendSms', 'DeleteFile'];
        this.displayedColumns = ['fileName', 'uploadDate', 'uploadBy', 'DeleteFile'];
    }
    FileManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.database = new FileDatabase(this.http);
        this.dataSource = new FileDataSource(this.database, this.http);
        __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].fromEvent(this.filter.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(function () {
            if (!_this.dataSource) {
                return;
            }
            _this.dataSource.filter = _this.filter.nativeElement.value;
        });
    };
    FileManagerComponent.prototype.sendFile = function (file) {
        var _this = this;
        this.http.get("http://localhost:3000/address?token=" + file.fileName).toPromise().then(function (data) {
            console.log(data);
            var copiedData = data.slice();
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var appt = data_1[_i];
                copiedData.push(appt);
                _this.http.post("http://localhost:3000/sms", { "log": appt }).toPromise().then();
            }
        });
    };
    FileManagerComponent.prototype.deleteFile = function (file) {
        this.http.post("http://localhost:3000/deleteFile", { fileName: file.fileName }).subscribe(function (res) {
            console.log(res);
            window.location.reload();
        }, function (err) {
            console.log("Error occured");
            window.location.reload();
        });
    };
    var _a, _b;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('filter'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], FileManagerComponent.prototype, "filter", void 0);
    FileManagerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-file-manager',
            template: __webpack_require__("../../../../../src/app/file-manager/file-manager.component.html"),
            styles: [__webpack_require__("../../../../../src/app/file-manager/file-manager.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object])
    ], FileManagerComponent);
    return FileManagerComponent;
}());

var FileDatabase = /** @class */ (function () {
    function FileDatabase(http) {
        this.http = http;
        /** Stream that emits whenever the data has been modified. */
        this.dataChange = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.prepareFileData(http);
    }
    Object.defineProperty(FileDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    FileDatabase.prototype.prepareFileData = function (http) {
        var _this = this;
        http.get("http://localhost:3000/currenttokens").subscribe(function (data) {
            console.log(data);
            var copiedData = _this.data.slice();
            for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                var file = data_2[_i];
                copiedData.push(file);
            }
            _this.dataChange.next(copiedData);
        });
    };
    return FileDatabase;
}());

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
var FileDataSource = /** @class */ (function (_super) {
    __extends(FileDataSource, _super);
    function FileDataSource(database, http) {
        var _this = _super.call(this) || this;
        _this.database = database;
        _this.http = http;
        _this._filterChange = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]('');
        return _this;
    }
    Object.defineProperty(FileDataSource.prototype, "filter", {
        get: function () { return this._filterChange.value; },
        set: function (filter) { this._filterChange.next(filter); },
        enumerable: true,
        configurable: true
    });
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    FileDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this.database.dataChange,
            this._filterChange,
        ];
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].merge.apply(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"], displayDataChanges).map(function () {
            return _this.database.data.slice().filter(function (item) {
                var searchStr = (item.originalName + item.uploadBy).toLowerCase();
                return searchStr.indexOf(_this.filter.toLowerCase()) != -1;
            });
        });
    };
    FileDataSource.prototype.disconnect = function () { };
    return FileDataSource;
}(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__["a" /* DataSource */]));

//# sourceMappingURL=file-manager.component.js.map

/***/ }),

/***/ "../../../../../src/app/fileview/fileview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Structure */\n.example-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    min-width: 300px;\n  }\n  \n  .example-header {\n    min-height: 64px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: baseline;\n        -ms-flex-align: baseline;\n            align-items: baseline;\n    padding: 8px 24px 0;\n    font-size: 20px;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n  }\n  \n  .mat-form-field {\n    font-size: 14px;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    margin-left: 32px;\n  }\n  \n  .mat-table {\n    overflow: auto;\n    min-height: 500px;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/fileview/fileview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-header\">\n    <md-form-field floatPlaceholder=\"never\">\n      <input mdInput #filter placeholder=\"Filter file\">\n    </md-form-field>\n  </div>\n  \n  <md-table #table [dataSource]=\"dataSource\">\n\n    <ng-container mdColumnDef=\"Date\">\n      <md-header-cell *mdHeaderCellDef> Date </md-header-cell>\n      <md-cell *mdCellDef=\"let element\"> {{element.Date | date:short}} </md-cell>\n    </ng-container>\n\n    <ng-container mdColumnDef=\"Time\">\n      <md-header-cell *mdHeaderCellDef> Time </md-header-cell>\n      <md-cell *mdCellDef=\"let element\"> {{element.Time}} </md-cell>\n    </ng-container>\n\n    <ng-container mdColumnDef=\"Address\">\n      <md-header-cell *mdHeaderCellDef> Address </md-header-cell>\n      <md-cell *mdCellDef=\"let element\"> {{element.Address}} </md-cell>\n    </ng-container>\n\n    <ng-container mdColumnDef=\"City\">\n      <md-header-cell *mdHeaderCellDef> City </md-header-cell>\n      <md-cell *mdCellDef=\"let element\"> {{element.City}} </md-cell>\n    </ng-container>\n\n    <ng-container mdColumnDef=\"State\">\n      <md-header-cell *mdHeaderCellDef> State </md-header-cell>\n      <md-cell *mdCellDef=\"let element\"> {{element.State}} </md-cell>\n    </ng-container>\n\n    <ng-container mdColumnDef=\"Zip\">\n      <md-header-cell *mdHeaderCellDef> Zip </md-header-cell>\n      <md-cell *mdCellDef=\"let element\"> {{element.Zip}} </md-cell>\n    </ng-container>  \n\n    <ng-container mdColumnDef=\"DAddress\">\n      <md-header-cell *mdHeaderCellDef> Dest Address </md-header-cell>\n      <md-cell *mdCellDef=\"let element\"> {{element.DAddress}} </md-cell>\n    </ng-container>\n\n    <ng-container mdColumnDef=\"DCity\">\n      <md-header-cell *mdHeaderCellDef> Dest City </md-header-cell>\n      <md-cell *mdCellDef=\"let element\"> {{element.DCity}} </md-cell>\n    </ng-container>\n\n    <ng-container mdColumnDef=\"DState\">\n      <md-header-cell *mdHeaderCellDef> Dest State </md-header-cell>\n      <md-cell *mdCellDef=\"let element\"> {{element.DState}} </md-cell>\n    </ng-container>\n\n    <ng-container mdColumnDef=\"DZip\">\n      <md-header-cell *mdHeaderCellDef> Dest Zip </md-header-cell>\n      <md-cell *mdCellDef=\"let element\"> {{element.DZip}} </md-cell>\n    </ng-container>  \n\n    <ng-container mdColumnDef=\"Phone\">\n      <md-header-cell *mdHeaderCellDef> Phone </md-header-cell>\n      <md-cell *mdCellDef=\"let element\"> {{element.Phone}} </md-cell>\n    </ng-container>  \n\n    <ng-container mdColumnDef=\"Detail\">\n      <md-header-cell *mdHeaderCellDef> Preview </md-header-cell>\n      <md-cell *mdCellDef=\"let element\" >\n          <button md-raised-button (click)=\"redirectToMsgDetail(element)\">Open</button>\n      </md-cell>\n    </ng-container>\n\n    <md-header-row *mdHeaderRowDef=\"displayedColumns\"></md-header-row>\n    <md-row *mdRowDef=\"let row; columns: displayedColumns;\"></md-row>\n  </md-table>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/fileview/fileview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SafePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileviewComponent; });
/* unused harmony export FileviewDatabase */
/* unused harmony export FileviewDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_observable_fromEvent__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    var _a;
    SafePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'safe' }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
    ], SafePipe);
    return SafePipe;
}());

var FileviewComponent = /** @class */ (function () {
    function FileviewComponent(http, activatedRoute, domSanitizer, router) {
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.domSanitizer = domSanitizer;
        this.router = router;
        this.displayedColumns = ['Date', 'Time', 'Address', 'City', 'State', 'Zip', 'DAddress', 'DCity', 'DState', 'DZip', 'Phone', 'Detail'];
    }
    FileviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.token = params['token'];
            console.log(_this.token);
            _this.database = new FileviewDatabase(_this.http, _this.token);
            _this.dataSource = new FileviewDataSource(_this.database);
            __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].fromEvent(_this.filter.nativeElement, 'keyup')
                .debounceTime(150)
                .distinctUntilChanged()
                .subscribe(function () {
                if (!_this.dataSource) {
                    return;
                }
                _this.dataSource.filter = _this.filter.nativeElement.value;
            });
        });
    };
    FileviewComponent.prototype.onClickSend = function (content) {
        console.log(content);
        this.http.post("http://localhost:3000/direction", content).subscribe();
    };
    FileviewComponent.prototype.redirectToMsgDetail = function (content) {
        var qs = JSON.stringify(content);
        this.router.navigateByUrl("/msg-detail?data=" + qs);
    };
    var _b, _c, _d, _e, _f;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('filter'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
    ], FileviewComponent.prototype, "filter", void 0);
    FileviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-fileview',
            template: __webpack_require__("../../../../../src/app/fileview/fileview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/fileview/fileview.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _f || Object])
    ], FileviewComponent);
    return FileviewComponent;
}());

var FileviewDatabase = /** @class */ (function () {
    function FileviewDatabase(http, token) {
        this.http = http;
        this.token = token;
        /** Stream that emits whenever the data has been modified. */
        this.dataChange = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.prepareFileData(http);
    }
    Object.defineProperty(FileviewDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    FileviewDatabase.prototype.prepareFileData = function (http) {
        var _this = this;
        http.get("http://localhost:3000/address?token=" + this.token).subscribe(function (data) {
            console.log(data);
            var copiedData = _this.data.slice();
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var file = data_1[_i];
                copiedData.push(file);
            }
            _this.dataChange.next(copiedData);
        });
    };
    return FileviewDatabase;
}());

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
var FileviewDataSource = /** @class */ (function (_super) {
    __extends(FileviewDataSource, _super);
    function FileviewDataSource(database) {
        var _this = _super.call(this) || this;
        _this.database = database;
        _this._filterChange = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]('');
        return _this;
    }
    Object.defineProperty(FileviewDataSource.prototype, "filter", {
        get: function () { return this._filterChange.value; },
        set: function (filter) { this._filterChange.next(filter); },
        enumerable: true,
        configurable: true
    });
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    FileviewDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this.database.dataChange,
            this._filterChange,
        ];
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].merge.apply(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"], displayDataChanges).map(function () {
            return _this.database.data.slice().filter(function (item) {
                var searchStr = (item.Address + item.City + item.Phone).toLowerCase();
                return searchStr.indexOf(_this.filter.toLowerCase()) != -1;
            });
        });
    };
    FileviewDataSource.prototype.disconnect = function () { };
    return FileviewDataSource;
}(__WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__["a" /* DataSource */]));

//# sourceMappingURL=fileview.component.js.map

/***/ }),

/***/ "../../../../../src/app/log-viewer/log-viewer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/log-viewer/log-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n    <div class=\"example-header\">\n      <md-form-field floatPlaceholder=\"never\">\n        <input mdInput #filter placeholder=\"Filter file\">\n      </md-form-field>\n    </div>\n    \n    <md-table #table [dataSource]=\"dataSource\">\n  \n      <ng-container mdColumnDef=\"DateSent\">\n          <md-header-cell *mdHeaderCellDef> Date Sent </md-header-cell>\n          <md-cell *mdCellDef=\"let element\"> {{element.DateSent | date:short}} </md-cell>\n        </ng-container>\n\n      <ng-container mdColumnDef=\"Date\">\n        <md-header-cell *mdHeaderCellDef> Date </md-header-cell>\n        <md-cell *mdCellDef=\"let element\"> {{element.Date | date:short}} </md-cell>\n      </ng-container>\n  \n      <ng-container mdColumnDef=\"Time\">\n        <md-header-cell *mdHeaderCellDef> Time </md-header-cell>\n        <md-cell *mdCellDef=\"let element\"> {{element.Time}} </md-cell>\n      </ng-container>\n  \n      <ng-container mdColumnDef=\"Address\">\n        <md-header-cell *mdHeaderCellDef> Address </md-header-cell>\n        <md-cell *mdCellDef=\"let element\"> {{element.Address}} </md-cell>\n      </ng-container>\n  \n      <ng-container mdColumnDef=\"City\">\n        <md-header-cell *mdHeaderCellDef> City </md-header-cell>\n        <md-cell *mdCellDef=\"let element\"> {{element.City}} </md-cell>\n      </ng-container>\n  \n      <ng-container mdColumnDef=\"State\">\n        <md-header-cell *mdHeaderCellDef> Processed </md-header-cell>\n        <md-cell *mdCellDef=\"let element\"> {{element.State}} </md-cell>\n      </ng-container>\n  \n      <ng-container mdColumnDef=\"Zip\">\n        <md-header-cell *mdHeaderCellDef> Zip </md-header-cell>\n        <md-cell *mdCellDef=\"let element\"> {{element.Zip}} </md-cell>\n      </ng-container>  \n  \n      <ng-container mdColumnDef=\"Phone\">\n        <md-header-cell *mdHeaderCellDef> Phone </md-header-cell>\n        <md-cell *mdCellDef=\"let element\"> {{element.Phone}} </md-cell>\n      </ng-container>  \n  \n      <ng-container mdColumnDef=\"Detail\">\n        <md-header-cell *mdHeaderCellDef> Preview </md-header-cell>\n        <md-cell *mdCellDef=\"let element\" >\n            <button md-raised-button (click)=\"redirectToMsgDetail(element)\">Open</button>\n        </md-cell>\n      </ng-container>\n  \n      <md-header-row *mdHeaderRowDef=\"displayedColumns\"></md-header-row>\n      <md-row *mdRowDef=\"let row; columns: displayedColumns;\"></md-row>\n    </md-table>\n  </div>\n  \n  "

/***/ }),

/***/ "../../../../../src/app/log-viewer/log-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogViewerComponent; });
/* unused harmony export FileviewDatabase */
/* unused harmony export FileviewDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_observable_fromEvent__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var LogViewerComponent = /** @class */ (function () {
    function LogViewerComponent(http, activatedRoute, domSanitizer, router) {
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.domSanitizer = domSanitizer;
        this.router = router;
        this.displayedColumns = ['DateSent', 'Date', 'Time', 'Address', 'City', 'State', 'Zip', 'Phone', 'Detail'];
    }
    LogViewerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.token = params['token'];
            console.log(_this.token);
            _this.database = new FileviewDatabase(_this.http, _this.token);
            _this.dataSource = new FileviewDataSource(_this.database);
            __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].fromEvent(_this.filter.nativeElement, 'keyup')
                .debounceTime(150)
                .distinctUntilChanged()
                .subscribe(function () {
                if (!_this.dataSource) {
                    return;
                }
                _this.dataSource.filter = _this.filter.nativeElement.value;
            });
        });
    };
    LogViewerComponent.prototype.onClickSend = function (content) {
        console.log(content);
        this.http.post("http://localhost:3000/direction", content).subscribe();
    };
    LogViewerComponent.prototype.redirectToMsgDetail = function (content) {
        var qs = JSON.stringify(content);
        this.router.navigateByUrl("/msg-detail?data=" + qs);
    };
    var _a, _b, _c, _d, _e;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('filter'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], LogViewerComponent.prototype, "filter", void 0);
    LogViewerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-log-viewer',
            template: __webpack_require__("../../../../../src/app/log-viewer/log-viewer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/log-viewer/log-viewer.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _e || Object])
    ], LogViewerComponent);
    return LogViewerComponent;
}());

var FileviewDatabase = /** @class */ (function () {
    function FileviewDatabase(http, token) {
        this.http = http;
        this.token = token;
        /** Stream that emits whenever the data has been modified. */
        this.dataChange = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.prepareFileData(http);
    }
    Object.defineProperty(FileviewDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    FileviewDatabase.prototype.prepareFileData = function (http) {
        var copiedData = [];
        copiedData.push({
            DateSent: "2017/11/08",
            Date: "2017/11/30",
            Address: "42 W Warren Ave",
            City: "Detroit",
            State: "MI",
            Zip: "48202",
            Phone: "248-787-0288"
        });
        this.dataChange.next(copiedData);
    };
    return FileviewDatabase;
}());

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
var FileviewDataSource = /** @class */ (function (_super) {
    __extends(FileviewDataSource, _super);
    function FileviewDataSource(database) {
        var _this = _super.call(this) || this;
        _this.database = database;
        _this._filterChange = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]('');
        return _this;
    }
    Object.defineProperty(FileviewDataSource.prototype, "filter", {
        get: function () { return this._filterChange.value; },
        set: function (filter) { this._filterChange.next(filter); },
        enumerable: true,
        configurable: true
    });
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    FileviewDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this.database.dataChange,
            this._filterChange,
        ];
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].merge.apply(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"], displayDataChanges).map(function () {
            return _this.database.data.slice().filter(function (item) {
                var searchStr = (item.Address + item.City + item.Phone).toLowerCase();
                return searchStr.indexOf(_this.filter.toLowerCase()) != -1;
            });
        });
    };
    FileviewDataSource.prototype.disconnect = function () { };
    return FileviewDataSource;
}(__WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__["a" /* DataSource */]));

//# sourceMappingURL=log-viewer.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-success\n{\n   transition: 0.5s;\n}\n\n.btn-success:hover, .btn-success:focus\n{\n   background: white;\n   border-color: #276EAD;\n   color: black;\n   transition: all 0.4s;\n}\n\n.btn-warning\n{\n   transition: 0.5s;\n}\n\n.btn-warning:hover, .btn-warning:focus\n{\n   background: white;\n   color: black;\n   border-color: #f0ad4e;\n}\n\n.panel.with-nav-tabs .nav-tabs\n{\n   border-bottom: none; \n}\n.panel.with-nav-tabs .nav-justified\n{\n   margin-bottom: -4px;\n}\n\n.panel\n{\n   margin: 7%;\n}\n\n.modal-header\n{\n   background: #FF3838;\n   color: white;\n   text-align: center;\n}\n\n.input-group-addon\n{\n   background-color: #276EAD;\n   color: white;\n}\n\n.iga1\n{\n   background-color: #f0ad4e;\n   color: white;\n}\n\n.iga2\n{\n   background-color: #FF3838;\n   color: white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n       <div class=\"col-md-6\">\n       <div class=\"panel with-nav-tabs panel-info\">\n          <div class=\"panel-heading\">\n             <ul class=\"nav nav-tabs\">\n                <li class=\"active\"><a href=\"/login/#login\" data-toggle=\"tab\"> Login </a></li>\n                <li><a href=\"/login/#signup\" data-toggle=\"tab\"> Signup </a></li>\n             </ul>\n          </div>\n\n          <div class=\"panel-body\">\n             <div class=\"tab-content\">\n                <div id=\"login\" class=\"tab-pane fade in active register\">\n                   <div class=\"container-fluid\">\n                      <div class=\"row\">\n                            <h2 class=\"text-center\" > <strong> Login  </strong></h2><hr />\n\n                            <div class=\"row\">\n                               <div class=\"col-xs-12 col-sm-12 col-md-12\">\n                                  <div class=\"form-group\">\n                                     <div class=\"input-group\">\n                                        <div class=\"input-group-addon\">\n                                           <span class=\"glyphicon glyphicon-user\"></span>\n                                        </div>\n                                        <input type=\"text\" placeholder=\"User Name\" name=\"uname\" class=\"form-control\">\n                                     </div>\n                                  </div>\n                               </div>\n                            </div>\n\n                            <div class=\"row\">\n                               <div class=\"col-xs-12 col-sm-12 col-md-12\">\n                                  <div class=\"form-group\">\n                                     <div class=\"input-group\">\n                                        <div class=\"input-group-addon\">\n                                           <span class=\"glyphicon glyphicon-lock\"></span>\n                                        </div>\n\n                                        <input type=\"password\" placeholder=\"Password\" name=\"pass\" class=\"form-control\">\n                                     </div>\n                                  </div>\n                               </div>\n                            </div>\n\n                            <div class=\"col-xs-12 col-sm-12 col-md-12\">\n                               <div class=\"col-xs-6 col-sm-6 col-md-6\">\n                                  <div class=\"form-group\">\n                                     <input type=\"checkbox\" name=\"check\" checked> Remember Me\n                                  </div>\n                               </div>\n\n                                <div class=\"col-xs-6 col-sm-6 col-md-6\">\n                                  <div class=\"form-group\">\n                                     <a href=\"#forgot\" data-toggle=\"modal\"> Forgot Password? </a>\n                                  </div>\n                               </div>\n                            </div>\n                            <hr />\n                            <div class=\"row\">\n                               <div class=\"col-xs-12 col-sm-12 col-md-12\">\n                                  <button type=\"submit\" class=\"btn btn-primary btn-block btn-lg\" (click)=\"authenticate()\"> Login </button>\n                               </div>\n                            </div>\n\n                      </div>\n                   </div> \n                </div>\n\n                <div id=\"signup\" class=\"tab-pane fade\">\n                   <div class=\"container-fluid\">\n                      <div class=\"row\">\n                            <h2 class=\"text-center\" style=\"color: #f0ad4e;\"> <Strong> Register </Strong></h2> <hr />\n                               <div class=\"row\">\n                                  <div class=\"col-xs-12 col-sm-12 col-md-12\">\n                                     <div class=\"form-group\">\n                                        <div class=\"input-group\">\n                                           <div class=\"input-group-addon iga1\">\n                                              <span class=\"glyphicon glyphicon-user\"></span>\n                                           </div>\n                                           <input type=\"text\" class=\"form-control\" placeholder=\"Enter User Name\" name=\"name\">\n                                        </div>\n                                     </div>\n                                  </div>\n                               </div>\n\n                               <div class=\"row\">\n                                  <div class=\"col-xs-12 col-sm-12 col-md-12\">\n                                     <div class=\"form-group\">\n                                        <div class=\"input-group\">\n                                           <div class=\"input-group-addon iga1\">\n                                              <span class=\"glyphicon glyphicon-envelope\"></span>\n                                           </div>\n                                           <input type=\"email\" class=\"form-control\" placeholder=\"Enter E-Mail\" name=\"mail\">\n                                        </div>\n                                     </div>\n                                  </div>\n                               </div>\n\n                               <div class=\"row\">\n                                  <div class=\"col-xs-12 col-sm-12 col-md-12\">\n                                     <div class=\"form-group\">\n                                        <div class=\"input-group\">\n                                           <div class=\"input-group-addon iga1\">\n                                              <span class=\"glyphicon glyphicon-lock\"></span>\n                                           </div>\n                                           <input type=\"password\" class=\"form-control\" placeholder=\"Enter Password\" name=\"pass\">\n                                        </div>\n                                     </div>\n                                  </div>\n                               </div>\n                               <hr>\n                               <div class=\"row\">\n                                  <div class=\"col-xs-12 col-sm-12 col-md-12\">\n                                     <div class=\"form-group\">\n                                        <button type=\"submit\" class=\"btn btn-lg btn-block btn-warning\"> Register</button>\n                                     </div>\n                                  </div>\n                               </div>\n                      </div>\n                   </div>\n                </div>\n             </div>\n          </div>\n       </div>\n    </div>\n </div>\n</div>\n\n\n <div class=\"modal fade\" id=\"forgot\">\n    <div class=\"modal-dialog\">\n       <div class=\"modal-content\">\n          <div class=\"modal-header\">\n             <button type=\"button\" class=\"close\" data-dismiss='modal' aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove\"></span></button>\n             <h4 class=\"modal-title\" style=\"font-size: 32px; padding: 12px;\"> Recover Your Password </h4>\n          </div>\n\n          <div class=\"modal-body\">\n             <div class=\"container-fluid\">\n                <div class=\"row\">\n                   <div class=\"col-xs-12 col-sm-12 col-md-12\">\n                      <div class=\"form-group\">\n                         <div class=\"input-group\">\n                            <div class=\"input-group-addon iga2\">\n                               <span class=\"glyphicon glyphicon-envelope\"></span>\n                            </div>\n                            <input type=\"email\" class=\"form-control\" placeholder=\"Enter Your E-Mail ID\" name=\"email\">\n                         </div>\n                      </div>\n                   </div>\n                </div>\n\n                <div class=\"row\">\n                   <div class=\"col-xs-12 col-sm-12 col-md-12\">\n                      <div class=\"form-group\">\n                         <div class=\"input-group\">\n                            <div class=\"input-group-addon iga2\">\n                               <span class=\"glyphicon glyphicon-lock\"></span>\n                            </div>\n                            <input type=\"password\" class=\"form-control\" placeholder=\"Enter Your New Password\" name=\"newpwd\">\n                         </div>\n                      </div>\n                   </div>\n                </div>\n             </div>\n          </div>\n\n          <div class=\"modal-footer\">\n             <div class=\"form-group\">\n                <button type=\"submit\" class=\"btn btn-lg btn-info\"> Save <span class=\"glyphicon glyphicon-saved\"></span></button>\n\n                <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-lg btn-default\"> Cancel <span class=\"glyphicon glyphicon-remove\"></span></button>\n             </div>\n          </div>\n       </div>\n    </div>\n </div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.authenticate = function () {
        this.router.navigateByUrl("/");
    };
    var _a;
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object])
    ], LoginComponent);
    return LoginComponent;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/msg-detail/msg-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/msg-detail/msg-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-content\">\n  <div class=\"modal-header\">\n  </div>\n  <div class=\"modal-body\">\n      <p>\n          <iframe class=\"map-top\" width=\"598\" height=\"450\" [src]=\"url | safe\" allowfullscreen ></iframe>\n        </p>\n        <p>\n          {{msg}}\n        </p>\n  </div>\n  <div class=\"modal-footer\">\n      <span>Click \"Send SMS\" to send this direction to the patient.\n      </span>\n      <button class=\"btn btn-default\" type=\"button\" (click)=\"navigateToPrevious()\">Cancel</button>\n      <button class=\"btn btn-primary\" type=\"button\" (click)=\"sendTwilioSMS()\">Send SMS</button>\n  </div>\n  <div style=\"padding-left: 10px;\">\n    <label>{{confirmation}}</label>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/msg-detail/msg-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MsgDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MsgDetailComponent = /** @class */ (function () {
    function MsgDetailComponent(_location, http, activatedRoute, domSanitizer, router, snackBar) {
        this._location = _location;
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.domSanitizer = domSanitizer;
        this.router = router;
        this.snackBar = snackBar;
    }
    MsgDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.data = params['data'];
            console.log(_this.data);
            _this.parsedData = JSON.parse(_this.data);
            var destQueryString = _this.parsedData.DAddress.replace(/\s+/g, '+') + "+" + _this.parsedData.DCity.replace(/\s+/g, '+') + "+" + _this.parsedData.DState.replace(/\s+/g, '+') + '+' + _this.parsedData.DZip.replace(/\s+/g, '+');
            var originQueryString = _this.parsedData.Address.replace(/\s+/g, '+') + "+" + _this.parsedData.City.replace(/\s+/g, '+') + "+" + _this.parsedData.State.replace(/\s+/g, '+') + '+' + _this.parsedData.Zip.replace(/\s+/g, '+');
            var baseUrl = "https://www.google.com/maps/embed/v1/directions?key=AIzaSyBuT01K3jTRqK_bsZYIsPDKMJy2gLXh79g&mode=transit&origin=";
            _this.url = baseUrl + originQueryString + "&destination=" + destQueryString;
            _this.http.post("http://localhost:3000/direction", _this.parsedData).subscribe(function (data) {
                _this.msg = data.msg;
            });
        });
    };
    MsgDetailComponent.prototype.navigateToPrevious = function () {
        this._location.back();
    };
    MsgDetailComponent.prototype.sendTwilioSMS = function () {
        var _this = this;
        this.http.post("http://localhost:3000/twiliosms", {
            body: this.msg,
            to: this.replaceAll(this.parsedData.Phone, '-', '')
        }).map(function (res) {
            if (res) {
                if (res.status === 201) {
                    return [{ status: res.status, json: res }];
                }
                else if (res.status === 200) {
                    return [{ status: res.status, json: res }];
                }
            }
        }).catch(function (error) {
            if (error.status < 400 || error.status === 500) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(new Error(error.status));
            }
        })
            .subscribe(function (res) {
            _this.confirmation = 'SMS has been sent to the patient.';
        }, function (err) {
            _this.confirmation = 'SMS has been sent to the patient.';
            console.log(err);
        });
    };
    MsgDetailComponent.prototype.sendSMS = function () {
        var _this = this;
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(decodeURIComponent(encodeURIComponent('t-ou5nt7kotjqkjioefjbtbsa:kmwf2ruyaapjojiov5qsjpkm5iky3ob7uutbmlq')))
            })
        };
        this.http.post("https://api.catapult.inetwork.com/v1/users/u-ho42wyzz63f72db6klvytli/messages?", {
            from: "+12486023111",
            to: this.replaceAll(this.parsedData.Phone, '-', ''),
            "text": this.msg
        }, httpOptions).map(function (res) {
            if (res) {
                if (res.status === 201) {
                    return [{ status: res.status, json: res }];
                }
                else if (res.status === 200) {
                    return [{ status: res.status, json: res }];
                }
            }
        }).catch(function (error) {
            if (error.status < 400 || error.status === 500) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(new Error(error.status));
            }
        })
            .subscribe(function (res) {
            _this.confirmation = 'SMS has been sent to the patient.';
        }, function (err) {
            _this.confirmation = 'SMS has been sent to the patient.';
            console.log(err);
        });
    };
    MsgDetailComponent.prototype.replaceAll = function (base, search, replacement) {
        return base.replace(new RegExp(search, 'g'), replacement);
    };
    var _a, _b, _c, _d, _e, _f;
    MsgDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-msg-detail',
            template: __webpack_require__("../../../../../src/app/msg-detail/msg-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/msg-detail/msg-detail.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common__["Location"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MatSnackBar */]) === "function" && _f || Object])
    ], MsgDetailComponent);
    return MsgDetailComponent;
}());

//# sourceMappingURL=msg-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/nav-menu/nav-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li .glyphicon {\n    margin-right: 10px;\n}\n\n/* Highlighting rules for nav menu items */\nli.link-active a,\nli.link-active a:hover,\nli.link-active a:focus {\n    background-color: #4189C7;\n    color: white;\n}\n\n/* Keep the nav menu independent of scrolling and on top of other items */\n.main-nav {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;\n}\n\n@media (min-width: 768px) {\n    /* On small screens, convert the nav menu to a vertical sidebar */\n    .main-nav {\n        height: 100%;\n        width: calc(25% - 20px);\n    }\n    .navbar {\n        border-radius: 0px;\n        border-width: 0px;\n        height: 100%;\n    }\n    .navbar-header {\n        float: none;\n    }\n    .navbar-collapse {\n        border-top: 1px solid #444;\n        padding: 0px;\n    }\n    .navbar ul {\n        float: none;\n    }\n    .navbar li {\n        float: none;\n        font-size: 15px;\n        margin: 6px;\n    }\n    .navbar li a {\n        padding: 10px 16px;\n        border-radius: 4px;\n    }\n    .navbar a {\n        /* If a menu item's text is too long, truncate it */\n        width: 100%;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav-menu/nav-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='main-nav'>\n  <div class='navbar navbar-inverse'>\n      <div class='navbar-header'>\n          <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\n              <span class='sr-only'>Toggle navigation</span>\n              <span class='icon-bar'></span>\n              <span class='icon-bar'></span>\n              <span class='icon-bar'></span>\n          </button>\n          <a class='navbar-brand' [routerLink]=\"['/home']\">BusMe Web Portal</a>\n      </div>\n      <div class='clearfix'></div>\n      <div class='navbar-collapse collapse'>\n          <ul class='nav navbar-nav'>\n              <li [routerLinkActive]=\"['link-active']\">\n                <a [routerLink]=\"['/appointment-create']\">\n                    <span class='glyphicon glyphicon-th-list'></span> Create Appointment\n                </a>\n              </li>\n              <li [routerLinkActive]=\"['link-active']\">\n                <a [routerLink]=\"['/file-manager']\">\n                    <span class='glyphicon glyphicon-th-list'></span> File Manager\n                </a>\n              </li>\n              <!-- <li [routerLinkActive]=\"['link-active']\">\n                <a [routerLink]=\"['/log-viewer']\">\n                    <span class='glyphicon glyphicon-th-list'></span> Log Viewer\n                </a>\n              </li> -->\n          </ul>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/nav-menu/nav-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent() {
    }
    NavMenuComponent.prototype.ngOnInit = function () {
    };
    NavMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'nav-menu',
            template: __webpack_require__("../../../../../src/app/nav-menu/nav-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/nav-menu/nav-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavMenuComponent);
    return NavMenuComponent;
}());

//# sourceMappingURL=nav-menu.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map