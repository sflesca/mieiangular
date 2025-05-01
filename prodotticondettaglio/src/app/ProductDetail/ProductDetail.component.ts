import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-ProductDetail',
  standalone: false,
  templateUrl: './ProductDetail.component.html',
  styleUrls: ['./ProductDetail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() product?: Product;
  
  constructor() { }

  ngOnInit() {
  }

}
