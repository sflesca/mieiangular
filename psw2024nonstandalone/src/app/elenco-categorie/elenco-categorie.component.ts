import { Component, Signal, WritableSignal } from '@angular/core';
import { CategorieService } from '../util/categorie.service';
import { Categoria } from '../util/Categoria';

@Component({
  selector: 'app-elenco-categorie',
  templateUrl: './elenco-categorie.component.html',
  styleUrl: './elenco-categorie.component.css'
})
export class ElencoCategorieComponent {
  categorie! : WritableSignal<Categoria[]>

  constructor(private catserv:CategorieService){}

  ngOnInit(){
    this.categorie = this.catserv.getCategoriesSignal()
  }

  reload(){
    this.catserv.getCategories()
  }
}
