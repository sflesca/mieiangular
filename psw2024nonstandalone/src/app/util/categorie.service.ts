import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  catObserv!:Observable<Categoria[]>

  constructor(private http: HttpClient) { }

  getCategories():Observable<Categoria[]>{
    this.catObserv = this.http.get<Categoria[]>('http://localhost:8080/api/categoria/all')
    this.catObserv.subscribe()
    return this.catObserv
  }
}

