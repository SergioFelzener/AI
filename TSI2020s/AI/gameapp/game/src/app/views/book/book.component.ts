import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../model/book';



@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books = new Array<Book>();
  selBook: Book = null;
  editMode =  false;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.refreshBooks();
  }

  refreshBooks(){
    this.books = this.bookService.list();
  }

  selectBook(book: Book){
    this.selBook = book;
    this.editMode = true;
  }

  save(){
    if (this.editMode){
      this.bookService.update(this.selBook);
    }else {
      this.bookService.insert(this.selBook);
    }
    this.cancel();
    this.refreshBooks();
  }

  cancel(){
    this.selBook = null;
  }

  newBook() {
    this.editMode = false;
    this.selBook = new Book ();
  }

  update(book: Book){
    this.editMode = true;
    this.selBook = book;
  }

  remove(id: number){
    this.bookService.remove(id);
    this.refreshBooks();
  }

}
