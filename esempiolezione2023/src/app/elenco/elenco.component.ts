import { Component, Input } from '@angular/core';
import { Cliente } from '../util/cliente';

@Component({
  selector: 'app-elenco',
  templateUrl: './elenco.component.html',
  styleUrls: ['./elenco.component.css']
})
export class ElencoComponent {

  clienti : Cliente[] = [
    {
        "id": 1,
        "cognome": "Rossi",
        "nome": "Mario",
        "tessera": "1234"
    },
    {
        "id": 2,
        "cognome": "Pippo",
        "nome": "Mario",
        "tessera": "1235"
    },
    {
        "id": 3,
        "cognome": "Pippo",
        "nome": "Mario",
        "tessera": "1235"
    },
    {
        "id": 4,
        "cognome": "Pippo",
        "nome": "Mario",
        "tessera": "1235"
    },
    {
        "id": 52,
        "cognome": "Rossi",
        "nome": "Mario",
        "tessera": "1234"
    },
    {
        "id": 102,
        "cognome": "Rossi",
        "nome": "Mario",
        "tessera": "1234"
    }
]

  @Input() numerolike: number = 0;

  mipiace(){
    this.numerolike++;
  }

  delete(c:Cliente){
    console.log('sto cancellando '+c.id)
  }

}
