import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgIfexe03Component } from './views/ng-ifexe03/ng-ifexe03.component';
import { NgIfexe01Component } from './views/ng-ifexe01/ng-ifexe01.component';
import { NgIfexe02Component } from './views/ng-ifexe02/ng-ifexe02.component';
import { NgIfexe04Component } from './views/ng-ifexe04/ng-ifexe04.component';
import { NgFor01Component } from './views/ng-for01/ng-for01.component';
import { NgFor02Component } from './views/ng-for02/ng-for02.component';
import { NgFor03Component } from './views/ng-for03/ng-for03.component';
import { NgFor04Component } from './views/ng-for04/ng-for04.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIfexe03Component,
    NgIfexe01Component,
    NgIfexe02Component,
    NgIfexe04Component,
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
