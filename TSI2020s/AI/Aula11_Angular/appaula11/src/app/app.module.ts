import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CepComponent } from './views/cep/cep.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoComponent } from './views/produto/produto.component';
import { TimezoneComponent } from './views/timezone/timezone.component';
import { Covid19Component } from './views/covid19/covid19.component';

@NgModule({
  declarations: [
    AppComponent,
    CepComponent,
    ProdutoComponent,
    TimezoneComponent,
    Covid19Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
