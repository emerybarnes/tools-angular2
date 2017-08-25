import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'company',
  templateUrl: './company.component.html'

})

export class CompanyComponent {
  constructor( public sanitizer: DomSanitizer, public change:ChangeDetectorRef){}
  leftNavOption:string = 'Nothing yet';

  setLeftNavOption(option:string):void{
    console.log(option)
    this.leftNavOption = option;

    this.change.detectChanges();
  }
}
