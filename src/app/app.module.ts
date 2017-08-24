import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppComponent} from './app.component';
import { NexusComponent } from './nexus.component';
import { CompanyComponent } from './company.component';
import { PlatformLeftNav } from './platform-left-nav.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NexusComponent,
    CompanyComponent,
    PlatformLeftNav
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
