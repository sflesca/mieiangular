import { Injectable } from '@angular/core';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    { id: 1, name: 'Laptop', description: 'High-end laptop', price: 1500 },
    { id: 2, name: 'Smartphone', description: 'Latest smartphone', price: 800 },
    { id: 3, name: 'Headphones', description: 'Noise cancelling', price: 200 }
  ];


  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

}
