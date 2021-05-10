import { SharedComponentsModule } from './../shared/components/shared-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import * as M from 'materialize-css';
import { ServiceItemComponent } from './service-item/service-item.component';

@NgModule({
  declarations: [HomeComponent, JumbotronComponent, ServiceItemComponent],
  imports: [CommonModule, HomeRoutingModule, SharedComponentsModule],
  providers: [{ provide: 'M', useValue: M }],
})
export class HomeModule {}
