
import {Injectable, Input} from '@angular/core';

import {App} from './app';
import {APPS} from './apps';

@Injectable()

export class AppService{
companyOptions: string[] = ['c1', 'c2'];
nexusOptions: string[] = ['n1', 'n2'];

getLeftNavItems() : string[]  {
  return ['test', 'test2'];
}

}
