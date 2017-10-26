import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import { APPS } from './apps'
import {CompanyComponent} from './company.component';
import {NexusComponent} from './nexus.component';
import {PlatformLeftNav} from './platform-left-nav.component'
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
  selectedLeftNav:string = "";

  apps = APPS;

  setView(appName:string):void{
    this.selectedView = appName;
  }

  onLeftNavOptionChange(option: string){
    this.selectedLeftNav = option;
    console.log(option);
  }
}
