import { SharedComponentsModule } from './../shared/components/shared-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import * as M from 'materialize-css';

@NgModule({
  declarations: [CartComponent, CartItemComponent],
  imports: [CommonModule, CartRoutingModule, SharedComponentsModule],
  providers: [{ provide: 'M', useValue: M }],
})
export class CartModule {}
