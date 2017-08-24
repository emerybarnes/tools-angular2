import {Component} from '@angular/core';
import {CompanyComponent} from './company.component';

@Component({
  selector:'platform-left-nav',
  template:'<div>test</div>',
  providers: [CompanyComponent]
})

export class PlatformLeftNav{
  constructor(private company: CompanyComponent){};

setLeftNavOption():void{
  //let option:string = 'Company Dashboard'
  //this.company.setLeftNavOption(option);
}
}
