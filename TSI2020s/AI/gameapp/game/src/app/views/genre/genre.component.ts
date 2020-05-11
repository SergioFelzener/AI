import { Component, OnInit } from '@angular/core';
import { Genre } from '../../model/genre';
import { GenreService } from '../../services/genre.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {
  genres = new Array<Genre>();
  selectedGenre: Genre = null;
  editMode = false;

  constructor(private genreService: GenreService) { }

  ngOnInit(): void {
    this.refreshGenres();
  }

  refreshGenres() {
    this.genres = this.genreService.list();
  }

  selectGenre(genre: Genre) {
    this.selectedGenre = genre;
    this.editMode = true;
  }

  save() {
    if (this.editMode) {
      this.genreService.update(this.selectedGenre);
    } else {
      this.genreService.insert(this.selectedGenre);
    }

    this.cancel();
    this.refreshGenres();
  }

  newGenre() {
    this.editMode = false;
    this.selectedGenre = new Genre();
  }

  update(genre: Genre) {
    this.editMode = true;
    this.selectedGenre = genre;
  }

  cancel() {
    this.selectedGenre = null;
  }

  remove(id: number) {
    this.genreService.remove(id);
    this.refreshGenres();
  }

}
