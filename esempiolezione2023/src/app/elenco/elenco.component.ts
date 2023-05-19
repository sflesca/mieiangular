import { Component, Input } from '@angular/core';
import { Cliente, clientiarray } from '../util/cliente';
import { Observable } from 'rxjs';
import { ClientiService } from '../util/ClientiService';

@Component({
  selector: 'app-elenco',
  templateUrl: './elenco.component.html',
  styleUrls: ['./elenco.component.css']
})
export class ElencoComponent {

  clienti! : Observable<Cliente[]>

  constructor(private cliserv:ClientiService){}

  ngOnInit(){
    this.clienti=this.cliserv.getClienti()
  }

  @Input() numerolike: number = 0;

  mipiace(){
    this.numerolike++;
  }

  delete(c:Cliente){
    this.cliserv.removeCliente(c.id).subscribe(val => this.clienti=this.cliserv.getClienti())

  }

  add(c:Cliente){
    console.log('qui')
    this.cliserv.add(c).subscribe(val => this.clienti=this.cliserv.getClienti())

  }

}
