import { CartService } from './../shared/services/cart.service';
import { Router } from '@angular/router';
import { AuthService } from './../shared/services/auth.service';
import { Component, OnInit, Inject } from '@angular/core';
import { ProductService } from '../shared/services/product.service';
import { Subscription } from 'rxjs';
import { IProduct } from '../shared/interfaces/Product-interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  isError!: boolean;
  isLoaded!: boolean;
  products!: IProduct[];
  productListSubscription!: Subscription;
  createCartSubscription!: Subscription;

  constructor(
    @Inject('M') private _M: any,
    private _productService: ProductService,
    private _cartService: CartService,
    private _authService: AuthService,
    private _router: Router
  ) {
    this.isLoaded = true;
    this.isError = false;
  }

  ngOnInit(): void {
    this.fetchProductList();
  }

  fetchProductList(): void {
    this.isLoaded = false;
    this.productListSubscription = this._productService
      .getProductList()
      .subscribe(
        (response) => {
          console.log(response);
          this.products = response.body!.data.Products;
          this.isLoaded = true;
          this.productListSubscription.unsubscribe();
        },
        (err) => {
          console.log(err);
          this.isError = true;
          this.isLoaded = true;
          this.productListSubscription.unsubscribe();
        }
      );
  }

  addProductToCart(productID: string) {
    if (!this._authService.isAuthenticated()) {
      this._router.navigate(['/login']);
      this._M.toast({
        html: 'You need do Login first',
        classes: 'green',
        displayLength: 2000,
      });
    } else {
      this.fetchCreateCart(productID);
    }
  }

  fetchCreateCart(productID: string) {
    this.isLoaded = false;
    const auth = localStorage.getItem('UserAuthorize');
    const authParsed = JSON.parse(auth!);
    this.createCartSubscription = this._cartService
      .createCart(authParsed.User._id, authParsed.Authorization, { quantity: 1, ProductID: productID })
      .subscribe(
        (response) => {
          console.log(response);
          this.isLoaded = true;
          this.createCartSubscription.unsubscribe();
          this._M.toast({
            html: 'Add product to cart success',
            classes: 'green',
            displayLength: 2000,
          });
        },
        (err) => {
          console.log(err);
          this.isLoaded = true;
          this.createCartSubscription.unsubscribe();
          this._M.toast({
            html: 'Add product to cart failed',
            classes: 'green',
            displayLength: 2000,
          });
        }
      );
  }
}
