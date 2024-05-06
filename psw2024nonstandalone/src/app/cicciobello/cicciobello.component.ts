import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../util/Categoria';
import { CategorieService } from '../util/categorie.service';

@Component({
  selector: 'app-cicciobello',
  templateUrl: './cicciobello.component.html',
  styleUrl: './cicciobello.component.css'
})
export class CicciobelloComponent {

  @Input() nome!  :string

  categorie! : Observable<Categoria[]>

  constructor(private catserv:CategorieService){}

  ngOnInit(){
    this.categorie = this.catserv.getCategories()
  }
}
