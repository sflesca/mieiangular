import { Component, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-cicciobello',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cicciobello.component.html',
  styleUrl: './cicciobello.component.css'
})
export class CicciobelloComponent {

  @Input() nome!:string

  miovalore:string = 'dsds'

  cambia(){
    this.nome = this.nome + ' ' + this.nome
  }
}
