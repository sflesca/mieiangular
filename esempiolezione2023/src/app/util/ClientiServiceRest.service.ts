import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';
import { ClientiService } from './ClientiService';

@Injectable({
  providedIn: 'root'
})
export class ClientiServiceRestService extends ClientiService {

  constructor() {
    super();
  }

  override getClienti(): Observable<Cliente[]> {
    throw new Error('Method not implemented.');
  }
  override removeCliente(id: number): Observable<Cliente[]> {
    throw new Error('Method not implemented.');
  }
  override add(c: Cliente): void {
    throw new Error('Method not implemented.');
  }

}
