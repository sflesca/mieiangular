import { Component } from '@angular/core';
import { Cliente } from '../util/cliente';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent {
  cliente: Cliente = { id: 0, cognome : '', nome : '', tessera : ''}

}
