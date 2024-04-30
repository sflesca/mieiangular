import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cicciobello',
  templateUrl: './cicciobello.component.html',
  styleUrl: './cicciobello.component.css'
})
export class CicciobelloComponent {

  @Input() nome!:string
}
