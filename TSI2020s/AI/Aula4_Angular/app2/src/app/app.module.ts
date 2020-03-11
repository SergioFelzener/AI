import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exemplo01Component } from './views/exemplo01/exemplo01.component';
import { ExibeNomeComponent } from './views/exibe-nome/exibe-nome.component';
import { MostraMaiusculaComponent } from './views/mostra-maiuscula/mostra-maiuscula.component';
import { MudaCssComponent } from './views/muda-css/muda-css.component';
import { ImagensComponent } from './views/imagens/imagens.component';
import { TrocaImagemComponent } from './views/troca-imagem/troca-imagem.component';

@NgModule({
  declarations: [
    AppComponent,
    Exemplo01Component,
    ExibeNomeComponent,
    MostraMaiusculaComponent,
    MudaCssComponent,
    ImagensComponent,
    TrocaImagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
