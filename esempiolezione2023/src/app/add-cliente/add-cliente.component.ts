import { Component, EventEmitter, Output } from '@angular/core';
import { Cliente, ClienteImp } from '../util/cliente';
import { ClientiService } from '../util/ClientiService';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent {
  cliente: Cliente = { id: 0, cognome : '', nome : '', tessera : ''}

  @Output() addcliente:EventEmitter<Cliente> = new EventEmitter<Cliente>()

  constructor(private clientesrv:ClientiService){}

  add(){
    this.addcliente.emit(this.cliente)
    this.cliente = new ClienteImp()
  }

}
