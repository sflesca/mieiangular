import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../Product.service';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[];
  @Output() productSelected = new EventEmitter<Product>();

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  selectProduct(product: Product) {
    this.productSelected.emit(product);
  }
}
