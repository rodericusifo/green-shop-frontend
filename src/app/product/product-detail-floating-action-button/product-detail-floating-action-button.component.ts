import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/Product-interface';

@Component({
  selector: 'app-product-detail-floating-action-button',
  templateUrl: './product-detail-floating-action-button.component.html',
  styleUrls: ['./product-detail-floating-action-button.component.css'],
})
export class ProductDetailFloatingActionButtonComponent implements OnInit {
  @Output() addProductToCart!: EventEmitter<string>;
  @Input() product!: IProduct;

  constructor() {
    this.addProductToCart = new EventEmitter<string>();
  }

  ngOnInit(): void {}

  emitProduct(productID: string) {
    this.addProductToCart.emit(productID);
  }
}
