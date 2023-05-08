import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-elenco',
  templateUrl: './elenco.component.html',
  styleUrls: ['./elenco.component.css']
})
export class ElencoComponent {

  @Input() numerolike: number = 0;

  mipiace(){
    this.numerolike++;
  }

}
