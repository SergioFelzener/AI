import { Injectable } from '@angular/core';
import { Game } from '../model/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private games = new Array<Game>();
  private autoGeneratedId = 0;

  constructor() { }

  insert(game: Game){
    game.id = this.autoGeneratedId;
    this.games.push(game);
    this.autoGeneratedId++;
  }

  list(): Array<Game> {
    return this.games;
  }

  remove(id: number){
    for(let i = 0; i < this.games.length; i++){
      const jogo = this.games[i];

      if(jogo.id === id){
        this.games.splice(i, 1);
        break;
      }
    }
  }

  update(game: Game){
    for(let i =0; i < this.games.length; i++){
      const newGame = this.games[i];
      if(newGame.id === game.id){
        this.games[i] = game;
        break;
      }
    }
  }

}
