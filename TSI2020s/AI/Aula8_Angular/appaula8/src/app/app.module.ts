import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgSwitch01Component } from './views/ng-switch01/ng-switch01.component';
import { NgSwitch02Component } from './views/ng-switch02/ng-switch02.component';

@NgModule({
  declarations: [
    AppComponent,
    NgSwitch01Component,
    NgSwitch02Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
