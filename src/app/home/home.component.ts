import { Component, OnInit } from '@angular/core';
import { IAppService } from '../shared/interfaces/AppService-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isLoaded!: boolean;
  services!: IAppService[];

  constructor() {
    this.services = [
      {
        iconName: 'local_offer',
        name: 'Product',
        linkTo: '/product',
        ariaLabel: 'see product list',
        description: `We did most of the heavy lifting for you to provide a default stylings
        that incorporate our custom components. Additionally, we refined
        animations and transitions to provide a smoother experience for
        developers.`,
      },
      {
        iconName: 'shopping_cart',
        name: 'Cart',
        linkTo: '/cart',
        ariaLabel: 'see cart list',
        description: `We did most of the heavy lifting for you to provide a default stylings
        that incorporate our custom components. Additionally, we refined
        animations and transitions to provide a smoother experience for
        developers.`,
      },
      {
        iconName: 'receipt',
        name: 'Order',
        linkTo: '/order',
        ariaLabel: 'see order list',
        description: `We did most of the heavy lifting for you to provide a default stylings
        that incorporate our custom components. Additionally, we refined
        animations and transitions to provide a smoother experience for
        developers.`,
      },
    ];
  }

  ngOnInit(): void {}
}
