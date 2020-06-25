import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {serverComponent} from "./server/server.component";
import { ServersComponent } from './servers/servers.component';
import { Practcomp1Component } from './practcomp1/practcomp1.component';
import {Pract2Component }  from './practcomp2/pract2.component';
import { PractdatabindingComponent } from './practdatabinding/practdatabinding.component';
import { PractdirectivesComponent } from './practdirectives/practdirectives.component';
@NgModule({
  declarations: [
    AppComponent,serverComponent, ServersComponent, Practcomp1Component,Pract2Component, PractdatabindingComponent, PractdirectivesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
