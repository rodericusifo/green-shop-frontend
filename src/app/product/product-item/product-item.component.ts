import { IProduct } from 'src/app/shared/interfaces/Product-interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product!: IProduct;
  @Output() addProductToCart!: EventEmitter<string>;

  constructor() {
    this.addProductToCart = new EventEmitter<string>();
  }

  ngOnInit(): void {}

  emitProduct(productID: string) {
    this.addProductToCart.emit(productID);
  }
}
