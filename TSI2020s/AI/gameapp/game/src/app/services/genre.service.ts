import { Injectable } from '@angular/core';
import { Genre } from '../model/genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private genres = new Array<Genre>();
  private autoGeneratedId = 0;

  constructor() { }

  save() {

    localStorage.setItem('genres', JSON.stringify(this.genres));
    localStorage.setItem('genresAutoGeneratedId', this.autoGeneratedId.toString());

  }

  load() {

    this.genres = JSON.parse(localStorage.getItem('genres'));

    if (this.genres == null) {
      this.genres = new Array<Genre>();
    }

    const autoId = localStorage.getItem('genresAutoGeneratedId');

    if (autoId) {
      this.autoGeneratedId = Number(autoId);
    }

  }

  insert(genre: Genre) {

    genre.id = this.autoGeneratedId;
    this.genres.push(genre);
    this.autoGeneratedId++;

    this.save();
  }

  list(): Array<Genre> {
    this.load();
    return this.genres;
  }

  remove(id: number) {
    for (let i = 0; i < this.genres.length; i++) {
      const m = this.genres[i];

      if (m.id === id) {
        this.genres.splice(i, 1);
        break;
      }
    }

    this.save();
  }

  update(genre: Genre) {
    for (let i = 0; i < this.genres.length; i++) {
      const g = this.genres[i];

      if (g.id === genre.id) {
        this.genres[i] = genre;
        break;
      }
    }

    this.save();
  }
}
