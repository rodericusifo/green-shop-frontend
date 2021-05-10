import { SharedComponentsModule } from './../shared/components/shared-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';

import { RegisterFormComponent } from './register-form/register-form.component';
import { ReactiveFormsModule } from '@angular/forms';

import * as M from 'materialize-css';

@NgModule({
  declarations: [RegisterComponent, RegisterFormComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    SharedComponentsModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: 'M', useValue: M }],
})
export class RegisterModule {}
