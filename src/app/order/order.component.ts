import { OrderService } from './../shared/services/order.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IOrder } from '../shared/interfaces/Order-interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  isError!: boolean;
  isLoaded!: boolean;
  orders!: IOrder[];
  orderListSubscription!: Subscription;

  constructor(private _orderService: OrderService) {
    this.isLoaded = true;
    this.isError = false;
  }

  ngOnInit(): void {
    this.fetchOrderList();
  }

  fetchOrderList() {
    this.isLoaded = false;
    const auth = localStorage.getItem('UserAuthorize');
    const authParsed = JSON.parse(auth!);
    this.orderListSubscription = this._orderService
      .getOrderList(authParsed.User._id, authParsed.Authorization)
      .subscribe(
        (response) => {
          console.log(response);
          this.orders = response.body!.data.Orders;
          this.isLoaded = true;
          this.orderListSubscription.unsubscribe();
        },
        (err) => {
          console.log(err);
          this.isError = true;
          this.isLoaded = true;
          this.orderListSubscription.unsubscribe();
        }
      );
  }
}
