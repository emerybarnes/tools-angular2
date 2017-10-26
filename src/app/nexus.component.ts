import { Component, Input } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'nexus',
  templateUrl: './nexus.component.html',
  styleUrls: ['./nexus.component.css']
})

export class NexusComponent {
  constructor( public sanitizer: DomSanitizer){}

  @Input() selectedView: string = "";
  @Input() selectedLeftNav:string = "";
  userName: string ='ebarnes';

  buxtonImg: string = 'assets/buxton-logo.svg';

  apps = [{name: 'test1'},{name: 'test2'},{name: 'test3'},{name: 'test4'}];
}
