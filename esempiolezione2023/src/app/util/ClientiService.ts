import { Observable } from "rxjs";
import { ClientiServiceInterface } from "./ClientiServiceInterface";
import { Cliente } from "./cliente";

export abstract class ClientiService implements ClientiServiceInterface{
  getClienti(): Observable<Cliente[]> {
    throw new Error("Method not implemented.");
  }
  removeCliente(id: number): Observable<Cliente[]> {
    throw new Error("Method not implemented.");
  }
  add(c: Cliente): void {
    throw new Error("Method not implemented.");
  }
}
