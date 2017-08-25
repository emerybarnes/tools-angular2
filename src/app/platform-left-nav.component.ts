import {Component} from '@angular/core';
import {CompanyComponent} from './company.component';

@Component({
  selector:'platform-left-nav',
  template:`
  <div (click)="setLeftNavOption('test1')">test</div>
  <div (click)="setLeftNavOption('test2')">test2</div>

  `,
  providers: [CompanyComponent]
})

export class PlatformLeftNav{
  constructor(private company: CompanyComponent){};

  setLeftNavOption(option:string):void{    
    this.company.setLeftNavOption(option);
  }
}
