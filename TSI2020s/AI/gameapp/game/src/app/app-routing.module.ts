import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './views/game/game.component';
import { GenreComponent } from './views/genre/genre.component';
import { BookComponent } from './views/book/book.component';
import { CategoriaComponent } from './views/categoria/categoria.component';


const routes: Routes = [
  { path:'game', component: GameComponent },
  { path:'genre', component: GenreComponent },
  { path:'book', component: BookComponent },
  { path:'categoria', component: CategoriaComponent },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
