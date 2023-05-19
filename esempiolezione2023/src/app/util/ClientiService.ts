import { Observable } from "rxjs";
import { ClientiServiceInterface } from "./ClientiServiceInterface";
import { Cliente } from "./cliente";

export abstract class ClientiService implements ClientiServiceInterface{

  clientiobs!:Observable<Cliente[]>

  getClienti(): Observable<Cliente[]> {
    throw new Error("Method not implemented.");
  }
  removeCliente(id: number): Observable<Boolean> {
    throw new Error("Method not implemented.");
  }
  add(c: Cliente): Observable<number> {
    throw new Error("Method not implemented.");
  }
}
