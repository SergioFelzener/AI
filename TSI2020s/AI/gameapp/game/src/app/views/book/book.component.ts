import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../model/book';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Categoria } from 'src/app/model/book_categoria';



@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books = new Array<Book>();
  categorias: Array<Categoria>;
  selBook: Book = null;
  editMode = false;

  constructor(private bookService: BookService, private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.refreshGames();
    this.refreshCategorias();
  }

  refreshGames(){
    this.books = this.bookService.list();
  }

  refreshCategorias(){
    this.categorias = this.categoriaService.list();
  }

  selectBook(book: Book){
    this.selBook = book;
    this.editMode = true;
  }

  newBook(){
    this.editMode = false;
    this.selBook = new Book();
  }

  save(){
    if(this.editMode) {
      this.bookService.update(this.selBook);
    }else {
      this.bookService.insert(this.selBook);
    }
    this.cancel();
    this.refreshGames();
  }

  cancel(){
    this.selBook = null;
  }

  remove(id: number){
    this.bookService.remove(id);
    this.refreshGames();
  }

}

