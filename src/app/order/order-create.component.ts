import { Router } from '@angular/router';
import { OrderService } from './../shared/services/order.service';
import { Subscription } from 'rxjs';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css'],
})
export class OrderCreateComponent implements OnInit {
  orderCreateSubscription!: Subscription;

  constructor(
    @Inject('M') private _M: any,
    private _orderService: OrderService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  createOrder(order: {
    buyerName: string;
    buyerAddress: string;
    buyerPhoneNumber: string;
  }) {
    const auth = localStorage.getItem('UserAuthorize');
    const authParsed = JSON.parse(auth!);
    this.orderCreateSubscription = this._orderService
      .createOrder(authParsed.User._id, authParsed.Authorization, order)
      .subscribe(
        (response) => {
          console.log(response);
          this.orderCreateSubscription.unsubscribe();
          this._router.navigate(['/order']);
          this._M.toast({
            html: 'Create order success',
            classes: 'green',
            displayLength: 2000,
          });
        },
        (err) => {
          console.log(err);
          this.orderCreateSubscription.unsubscribe();
          this._router.navigate(['/order']);
          this._M.toast({
            html: 'Create order failed',
            classes: 'green',
            displayLength: 2000,
          });
        }
      );
  }
}
