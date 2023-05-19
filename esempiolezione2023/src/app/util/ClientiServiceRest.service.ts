import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';
import { ClientiService } from './ClientiService';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class ClientiServiceRestService extends ClientiService {

  constructor(private http : HttpClient) {
    super();
  }

  override getClienti(): Observable<Cliente[]> {
    this.clientiobs = this.http.get<Cliente[]>('http://localhost:8080/cliente/all')
    this.clientiobs.subscribe()
    return this.clientiobs
  }
  override removeCliente(id: number): Observable<Boolean> {
    return this.http.delete<Boolean>('http://localhost:8080/cliente?id='+id)
  }
  override add(c: Cliente): Observable<number> {
    return this.http.post<number>('http://localhost:8080/cliente', c, httpOptions)
  }

}
