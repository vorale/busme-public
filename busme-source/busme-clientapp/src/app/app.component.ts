import { Component } from '@angular/core';
// import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // template: `
  // <div class="container">
  //   <nav class="navbar navbar-default">
  //       <div class="navbar-header">
  //         <a class="navbar-brand" routerLink="/dashboard">{{title}}</a>
  //       </div>
  //       <ul class="nav navbar-nav">
  //         <li>
  //           <a routerLink="/deals" routerLinkActive="active">Deals</a>
  //         </li>
  //         <li>
  //           <a routerLink="/special" *ngIf="authService.authenticated" routerLinkActive="active">Private Deals</a>
  //         </li>
  //       </ul>
  //       <ul class="nav navbar-nav navbar-right">
  //         <li>
  //           <a *ngIf="!authService.authenticated" (click)="authService.login()">Log In</a>
  //         </li>
  //         <li>
  //           <a (click)=authService.logout() *ngIf="authService.authenticated">Log Out</a>
  //         </li>
  //       </ul>
  //   </nav>
  //   <div class="col-sm-12">
  //     <router-outlet></router-outlet>
  //   </div>
  // </div>
  // `,
  // styles : ['.navbar-right { margin-right: 0px !important}']
})
export class AppComponent {
  title = 'app';

  // constructor(private authService: AuthService) {
  // }
  constructor(){}
}
