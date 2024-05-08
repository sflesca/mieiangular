import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, WritableSignal, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  getCategoriesSignal(): WritableSignal<Categoria[]> {
    return this.catSignal;
  }
  catObserv!:Observable<Categoria[]>
  catSignal: WritableSignal<Categoria[]> = signal([])

  constructor(private http: HttpClient) { }

  getCategories():Observable<Categoria[]>{
    this.catSignal.set([])
    this.catObserv = this.http.get<Categoria[]>('http://localhost:8080/api/categoria/all')
    this.catObserv.subscribe(value => this.catSignal.set(value))
    return this.catObserv
  }
}

