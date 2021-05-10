import { CartService } from './../shared/services/cart.service';
import { Component, OnInit, Inject } from '@angular/core';
import { ICart } from '../shared/interfaces/Cart-interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  isAllowCheckout!: boolean;
  isError!: boolean;
  isLoaded!: boolean;
  carts!: ICart[];
  cartListSubscription!: Subscription;
  cartEditSubscription!: Subscription;
  cartDeleteSubscription!: Subscription;

  constructor(@Inject('M') private _M: any, private _cartService: CartService) {
    this.isLoaded = true;
    this.isError = false;
    this.isAllowCheckout = true;
  }

  ngOnInit(): void {
    this.fetchCartList();
  }

  fetchCartList() {
    this.isLoaded = false;
    const auth = localStorage.getItem('UserAuthorize');
    const authParsed = JSON.parse(auth!);
    this.cartListSubscription = this._cartService
      .getCartList(authParsed.User._id, authParsed.Authorization)
      .subscribe(
        (response) => {
          console.log(response);
          this.carts = response.body!.data.Carts;
          this.isLoaded = true;
          this.cartListSubscription.unsubscribe();
        },
        (err) => {
          console.log(err);
          this.isError = true;
          this.isLoaded = true;
          this.cartListSubscription.unsubscribe();
        }
      );
  }

  editCart(cart: { cartID: string; cartQuantity: number }) {
    this.isAllowCheckout = false;
    const auth = localStorage.getItem('UserAuthorize');
    const authParsed = JSON.parse(auth!);
    this.cartEditSubscription = this._cartService
      .editCart(authParsed.User._id, cart.cartID, authParsed.Authorization, {
        quantity: cart.cartQuantity,
      })
      .subscribe(
        (response) => {
          console.log(response);
          this.isAllowCheckout = true;
          this.cartEditSubscription.unsubscribe();
        },
        (err) => {
          console.log(err);
          this.isAllowCheckout = true;
          this.cartEditSubscription.unsubscribe();
        }
      );
  }

  deleteCart(cartID: string) {
    const auth = localStorage.getItem('UserAuthorize');
    const authParsed = JSON.parse(auth!);
    this.cartDeleteSubscription = this._cartService
      .deleteCart(authParsed.User._id, cartID, authParsed.Authorization)
      .subscribe(
        (response) => {
          console.log(response);
          this.cartDeleteSubscription.unsubscribe();
          this.ngOnInit();
          this._M.toast({
            html: 'Delete cart success',
            classes: 'green',
            displayLength: 2000,
          });
        },
        (err) => {
          console.log(err);
          this.cartDeleteSubscription.unsubscribe();
          this.ngOnInit();
          this._M.toast({
            html: 'Delete cart failed',
            classes: 'green',
            displayLength: 2000,
          });
        }
      );
  }
}
