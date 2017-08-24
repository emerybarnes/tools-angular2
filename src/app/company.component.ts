import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'company',
  templateUrl: './company.component.html'

})

export class CompanyComponent {
  constructor( public sanitizer: DomSanitizer){}
  leftNavOption:string = '';

  setLeftNavOption(option:string):void{
    this.leftNavOption = option;
  }
}
