import { Categoria } from './book_categoria';

export class Book {
  id: number;
  name: string;
  autor: string;
  editora: string;
  edicao: number;
  categoria: Categoria;

}
