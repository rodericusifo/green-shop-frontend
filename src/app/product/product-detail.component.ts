import { CartService } from './../shared/services/cart.service';
import { ProductService } from './../shared/services/product.service';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/shared/interfaces/Product-interface';
import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  isLoaded!: boolean;
  product!: IProduct;
  routeParamsSubscription!: Subscription;
  productDetailSubscription!: Subscription;
  createCartSubscription!: Subscription;
  isError!: boolean;

  constructor(
    @Inject('M') private _M: any,
    private _productService: ProductService,
    private _cartService: CartService,
    private _route: ActivatedRoute,
    private _authService: AuthService,
    private _router: Router
  ) {
    this.isLoaded = true;
  }

  ngOnInit(): void {
    this.fetchProductDetail();
  }

  fetchProductDetail(): void {
    this.isLoaded = false;
    this.routeParamsSubscription = this._route.params.subscribe((params) => {
      const productID = params.id;
      this.productDetailSubscription = this._productService
        .getProductDetail(productID)
        .subscribe(
          (response) => {
            console.log(response);
            this.product = response.body!.data.Product;
            this.isLoaded = true;
            this.routeParamsSubscription.unsubscribe();
            this.productDetailSubscription.unsubscribe();
          },
          (err) => {
            console.log(err);
            this.isError = true;
            this.isLoaded = true;
            this.routeParamsSubscription.unsubscribe();
            this.productDetailSubscription.unsubscribe();
          }
        );
    });
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
      .createCart(authParsed.User._id, authParsed.Authorization, {
        quantity: 1,
        ProductID: productID,
      })
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
