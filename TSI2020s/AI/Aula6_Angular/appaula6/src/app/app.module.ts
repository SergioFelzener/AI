import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercicio01Component } from './views/exercicio01/exercicio01.component';
import { FormsModule } from '@angular/forms';
import { Exercicio02Component } from './views/exercicio02/exercicio02.component';
import { ExselectComponent } from './views/exselect/exselect.component';
import { CheckboxComponent } from './views/checkbox/checkbox.component';
import { RadioComponent } from './views/radio/radio.component';
import { Exercicio03Component } from './views/exercicio03/exercicio03.component';
import { DesafioRadioComponent } from './views/desafio-radio/desafio-radio.component';
import { NgIf01Component } from './views/ng-if01/ng-if01.component';
import { NgIf02Component } from './views/ng-if02/ng-if02.component';
import { NgIf03Component } from './views/ng-if03/ng-if03.component';
import { NgIf04Component } from './views/ng-if04/ng-if04.component';
import { NgFor01Component } from './views/ng-for01/ng-for01.component';
import { NgFor02Component } from './views/ng-for02/ng-for02.component';
import { NgFor03Component } from './views/ng-for03/ng-for03.component';
import { NgFor04Component } from './views/ng-for04/ng-for04.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercicio01Component,
    Exercicio02Component,
    ExselectComponent,
    CheckboxComponent,
    RadioComponent,
    Exercicio03Component,
    DesafioRadioComponent,
    NgIf01Component,
    NgIf02Component,
    NgIf03Component,
    NgIf04Component,
    NgFor01Component,
    NgFor02Component,
    NgFor03Component,
    NgFor04Component
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
