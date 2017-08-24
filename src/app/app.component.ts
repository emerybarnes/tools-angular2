import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor( public sanitizer: DomSanitizer){}

  userName: string ='ebarnes';
  buxtonImg: string = 'assets/buxton-logo.svg';
  selectedView:string = '';

  apps = [{name: 'Platform', image: './assets/platform-icon.svg'},
          {name: 'Nexus', image: './assets/nexus-icon.svg'},
          {name: 'Ops Dashboard', image: './assets/ops-icon.svg'},
          {name: 'Finance', image: './assets/finance-icon.png'},
          {name: 'Marketing', image: './assets/marketing-icon.svg'},
          {name: 'World View', image: './assets/worldview-icon.svg'}
        ];

  setView(appName:string):void{
    this.selectedView = appName;
  }
}
