import { Injectable } from '@angular/core';
import { Cliente, clientiarray } from './util/cliente';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientiService {

  clienti: Cliente[] = clientiarray
  clientiobs:Observable<Cliente[]> = of(clientiarray)

  constructor() { }

  getClienti(): Observable<Cliente[]>{
    return this.clientiobs
  }

  removeCliente(id:number): Observable<Cliente[]>{
    let index: number = this.clienti.findIndex(cl => cl.id==id);
    if (index!= -1){
      this.clienti.splice(index,1)
      console.log('sto cancellando '+id+' in posizione '+index)
    }else{
      console.log('Elemento '+id+' non trovato')
    }
    return this.clientiobs
  }

  add(c:Cliente){
    let cid = Math.max(...(this.clienti.map(cl=>cl.id)))+1
    c.id = cid
    this.clienti.push(c)
    console.log(this.clienti)
  }
}