import { SharedComponentsModule } from './../shared/components/shared-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailImageComponent } from './product-detail-image/product-detail-image.component';
import { ProductDetailInfoComponent } from './product-detail-info/product-detail-info.component';
import { ProductDetailDescriptionComponent } from './product-detail-description/product-detail-description.component';
import { ProductDetailFloatingActionButtonComponent } from './product-detail-floating-action-button/product-detail-floating-action-button.component';

import * as M from 'materialize-css';

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductItemComponent,
    ProductDetailImageComponent,
    ProductDetailInfoComponent,
    ProductDetailDescriptionComponent,
    ProductDetailFloatingActionButtonComponent,
  ],
  imports: [CommonModule, ProductRoutingModule, SharedComponentsModule],
  providers: [{ provide: 'M', useValue: M }],
})
export class ProductModule {}
