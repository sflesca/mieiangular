import { Observable } from "rxjs";
import { Cliente } from "./cliente";

export interface ClientiServiceInterface {
  getClienti(): Observable<Cliente[]>

  removeCliente(id:number): Observable<Cliente[]>

  add(c:Cliente): void
}
