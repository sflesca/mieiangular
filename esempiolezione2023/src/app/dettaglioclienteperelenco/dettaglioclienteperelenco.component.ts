import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cliente } from '../util/cliente';

@Component({
  selector: 'app-dettaglioclienteperelenco',
  templateUrl: './dettaglioclienteperelenco.component.html',
  styleUrls: ['./dettaglioclienteperelenco.component.css']
})
export class DettaglioclienteperelencoComponent implements OnInit {

  @Input() cliente: Cliente = {
    "id": 1,
    "cognome": "Rossi",
    "nome": "Mario",
    "tessera": "1234"
  }

  @Output() cancella = new EventEmitter<number>()

  constructor() { }

  ngOnInit() {
  }

  delete(){
    this.cancella.emit(this.cliente.id)
    console.log(this.cliente.id)
  }
}
