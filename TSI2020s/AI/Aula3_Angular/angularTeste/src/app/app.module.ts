import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateComponent } from './views/date/date.component';
import { MsgComponent } from './views/msg/msg.component';
import { SomaComponent } from './views/soma/soma.component';

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    MsgComponent,
    SomaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
