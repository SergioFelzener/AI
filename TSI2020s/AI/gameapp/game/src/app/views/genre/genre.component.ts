import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/model/genre';
import { GenreService } from 'src/app/services/genre.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  genres = new Array<Genre>();
  selGenre: Genre = null;
  editMode = false;

  constructor(private genreService: GenreService) { }

  ngOnInit(): void {
  }

  refreshGenres(){
    this.genres = this.genreService.list();
  }

  selectGenre(genre: Genre){
    this.selGenre = genre;
    this.editMode = true;
  }

  newGenre(){
    this.editMode = false;
    this.selGenre = new Genre();
  }

  save(){
    if(this.editMode) {
      this.genreService.update(this.selGenre);
    }else {
      this.genreService.insert(this.selGenre);
    }
    this.cancel();
    this.refreshGenres();
  }

  cancel(){
    this.selGenre = null;
  }

  remove(id: number){
    this.genreService.remove(id);
    this.refreshGenres();
  }

}


