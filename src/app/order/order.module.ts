import { SharedComponentsModule } from './../shared/components/shared-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';

import { OrderItemComponent } from './order-item/order-item.component';
import { OrderCreateComponent } from './order-create.component';
import { OrderCreateFormComponent } from './order-create-form/order-create-form.component';
import { ReactiveFormsModule } from '@angular/forms';

import * as M from 'materialize-css';

@NgModule({
  declarations: [
    OrderComponent,
    OrderItemComponent,
    OrderCreateComponent,
    OrderCreateFormComponent,
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    SharedComponentsModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: 'M', useValue: M }],
})
export class OrderModule {}
