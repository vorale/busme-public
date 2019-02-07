import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap';
//import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AppComponent } from './app.component';
import { AppointmentCreateComponent } from './appointment-create/appointment-create.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FileUploadModule } from "ng2-file-upload";
import { DirectionComponent } from './direction/direction.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { MdTableModule, MatSnackBarModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { MdFormFieldModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FileviewComponent, SafePipe } from './fileview/fileview.component';
import { ModalModule } from "ng2-modal";
import { MsgDetailComponent } from './msg-detail/msg-detail.component';
import { LoginComponent } from './login/login.component';
import { LogViewerComponent } from './log-viewer/log-viewer.component';
// import { CallbackComponent } from './callback/callback.component';
// import { AuthGuard } from './auth-guard.service';
// import { AuthService} from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentCreateComponent,
    DirectionComponent,
    NavMenuComponent,
    DirectionComponent,
    FileManagerComponent,
    FileviewComponent,
    SafePipe,
    MsgDetailComponent,
    LoginComponent,
    LogViewerComponent
    // CallbackComponent,
  ],
  imports: [
    ModalModule,
    BrowserAnimationsModule,
    BrowserModule,
    FileUploadModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'appointment-create', component: AppointmentCreateComponent },
      { path: 'direction', component: DirectionComponent },
      { path: 'file-manager', component: FileManagerComponent },
      { path: 'fileview', component: FileviewComponent },
      { path: 'msg-detail', component: MsgDetailComponent },
      { path: 'login', component: LoginComponent},
      { path: 'log-viewer', component: LogViewerComponent},
      // { path: 'appointment-create', component: AppointmentCreateComponent, canActivate: [AuthGuard] },
      // { path: 'direction', component: DirectionComponent, canActivate: [AuthGuard] },
      // { path: 'file-manager', component: FileManagerComponent, canActivate: [AuthGuard] },
      // { path: 'fileview', component: FileviewComponent, canActivate: [AuthGuard]},
      // { path: 'callback', component: CallbackComponent},
      { path: '**', redirectTo: 'home' }
    ]),
    AlertModule.forRoot(),
    BrowserModule,
    MdTableModule,
    MdFormFieldModule,
    MdInputModule,
    MatSnackBarModule,
    CdkTableModule,
    HttpClientModule
  ],
  providers: [
    //AUTH_PROVIDERS,
    // AuthService,
    // AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
