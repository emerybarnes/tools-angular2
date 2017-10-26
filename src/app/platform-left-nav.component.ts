import {Component, Input, OnChanges, SimpleChange, Output, EventEmitter} from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector:'platform-left-nav',
  templateUrl:'./platform-left-nav.components.html',
  styleUrls: ['./platform-left-nav.components.css'],
  providers: [AppService]
})

export class PlatformLeftNav{
  constructor(private _appService: AppService, ){}

  leftNavOptions: string[];
  companyOptions: string[] = ['Company Dashboard', 'Businesses', 'Errors', 'Role Management', 'Release Notes', 'Feedback',];
  nexusOptions: string[] = ['n1', 'n2'];

  @Input() selectedApp: string;

  @Output() onLeftNavOptionChange = new EventEmitter<string>();


  leftNavOptionChanged(option: string){
    this.onLeftNavOptionChange.emit(option);
  }
  ngOnChanges(changes : SimpleChange)
  {
    for(let a in changes)
    {
        let app = changes[a].currentValue;

        switch(app){
          case "Platform":
            this.leftNavOptions = this.companyOptions;
            break;
          case "Nexus":
            this.leftNavOptions = this.nexusOptions;
            break;
          case "":
            this.leftNavOptions = [];
            break;
        }
    }
  }
}
