import { Observable } from "rxjs";
import { Cliente } from "./cliente";

export interface ClientiServiceInterface {
  getClienti(): Observable<Cliente[]>

  removeCliente(id:number): Observable<Boolean>

  add(c:Cliente): Observable<number>
}
