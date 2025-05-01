import { Component } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectedProduct?: Product;

  onProductSelected(product: Product) {
    this.selectedProduct = product;
  }
}
