import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercicio01Component } from './views/exercicio01/exercicio01.component';
import { FormsModule } from '@angular/forms';
import { Exercicio02Component } from './views/exercicio02/exercicio02.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercicio01Component,
    Exercicio02Component
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
