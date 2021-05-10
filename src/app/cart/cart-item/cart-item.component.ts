import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ICart } from 'src/app/shared/interfaces/Cart-interface';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() cart!: ICart;
  @Output() editCart!: EventEmitter<{
    cartID: string;
    cartQuantity: number;
  }>;
  @Output() deleteCart!: EventEmitter<string>;

  constructor() {
    this.editCart = new EventEmitter<{
      cartID: string;
      cartQuantity: number;
    }>();
    this.deleteCart = new EventEmitter<string>();
  }

  ngOnInit(): void {}

  emitCart(cartID: string, quantityInputValue: string) {
    this.cart.amount = Number(quantityInputValue) * this.cart.Product.price;
    this.editCart.emit({
      cartID,
      cartQuantity: Number(quantityInputValue),
    });
  }

  emitCartForDelete(cartID: string) {
    this.deleteCart.emit(cartID);
  }
}
