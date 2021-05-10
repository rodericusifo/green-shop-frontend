import { Component, Input, OnInit } from '@angular/core';
import { IOrder } from 'src/app/shared/interfaces/Order-interface';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css'],
})
export class OrderItemComponent implements OnInit {
  @Input() order!: IOrder;

  constructor() {}

  ngOnInit(): void {}
}
