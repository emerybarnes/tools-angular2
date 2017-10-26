import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import { ChangeDetectorRef } from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'company',
  templateUrl: './company.component.html'

})

export class CompanyComponent {
  constructor( public sanitizer: DomSanitizer, public change:ChangeDetectorRef){}
  @Input() selectedView:string = "";
  @Input() selectedLeftNav:string = "";

onchange(change: SimpleChange){
  

}

}
