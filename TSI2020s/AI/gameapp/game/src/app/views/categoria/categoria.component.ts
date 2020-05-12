import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { Categoria } from '../../model/book_categoria';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categorias = new Array<Categoria>();
  selCat: Categoria = null;
  editMode =  false;

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.refreshCats();
  }

  refreshCats(){
    this.categorias = this.categoriaService.list();
  }

  selectCat(categoria: Categoria){
    this.selCat = categoria;
    this.editMode = true;
  }

  save(){
    if (this.editMode){
      this.categoriaService.update(this.selCat);
    }else {
      this.categoriaService.insert(this.selCat);
    }
    this.cancel();
    this.refreshCats();
  }

  cancel(){
    this.selCat = null;
  }

  newCat() {
    this.editMode = false;
    this.selCat = new Categoria ();
  }

  update(categoria: Categoria){
    this.editMode = true;
    this.selCat = categoria;
  }

  remove(id: number){
    this.categoriaService.remove(id);
    this.refreshCats();
  }

}

