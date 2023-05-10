import { Cliente } from './../util/cliente';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dettaglioclienteperelenco',
  templateUrl: './dettaglioclienteperelenco.component.html',
  styleUrls: ['./dettaglioclienteperelenco.component.css']
})
export class DettaglioclienteperelencoComponent implements OnInit {

  @Input() cliente!: Cliente

  @Output() cancella = new EventEmitter<number>()

  constructor() { }

  ngOnInit() {
  }

  delete(){
    this.cancella.emit(this.cliente.id)
    console.log(this.cliente.id)
  }
}
