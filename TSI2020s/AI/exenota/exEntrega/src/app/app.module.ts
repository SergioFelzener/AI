import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExeAula05Component } from './exe-aula05/exe-aula05.component';
import { Exe2Aula05Component } from './exe2-aula05/exe2-aula05.component';

@NgModule({
  declarations: [
    AppComponent,
    ExeAula05Component,
    Exe2Aula05Component
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
