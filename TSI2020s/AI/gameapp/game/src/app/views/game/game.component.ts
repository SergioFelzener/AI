import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game } from 'src/app/model/game';
import { GenreService } from 'src/app/services/genre.service';
import { Genre } from 'src/app/model/genre';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  games = new Array<Game>();
  genres: Array<Genre>;
  selGame: Game = null;
  editMode = false;

  constructor(private gameService: GameService, private genreService: GenreService) { }

  ngOnInit(): void {
    this.refreshGames();
    this.refreshGenres();
  }

  refreshGames(){
    this.games = this.gameService.list();
  }

  refreshGenres(){
    this.genres = this.genreService.list();
  }

  selectGame(game: Game){
    this.selGame = game;
    this.editMode = true;
  }

  newGame(){
    this.editMode = false;
    this.selGame = new Game();
  }

  save(){
    if(this.editMode) {
      this.gameService.update(this.selGame);
    }else {
      this.gameService.insert(this.selGame);
    }
    this.cancel();
    this.refreshGames();
  }

  cancel(){
    this.selGame = null;
  }

  remove(id: number){
    this.gameService.remove(id);
    this.refreshGames();
  }

}
