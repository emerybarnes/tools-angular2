import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NexusComponent} from './nexus.component';
import {CompanyComponent} from './company.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch:'full'},
  {path:'nexus', component: NexusComponent},
  {path:'company', component: CompanyComponent}
]


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
