import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CicciobelloComponent } from './cicciobello/cicciobello.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CicciobelloComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'psw2024';
}
