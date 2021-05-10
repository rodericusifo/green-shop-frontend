import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './shared/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: async () => {
      const m = await import('./home/home.module');
      return m.HomeModule;
    },
  },
  {
    path: 'home',
    loadChildren: async () => {
      const m = await import('./home/home.module');
      return m.HomeModule;
    },
  },
  {
    path: 'product',
    loadChildren: async () => {
      const m = await import('./product/product.module');
      return m.ProductModule;
    },
  },
  {
    path: 'cart',
    loadChildren: async () => {
      const m = await import('./cart/cart.module');
      return m.CartModule;
    },
    canActivate: [AuthGuardService],
  },
  {
    path: 'order',
    loadChildren: async () => {
      const m = await import('./order/order.module');
      return m.OrderModule;
    },
    canActivate: [AuthGuardService],
  },
  {
    path: 'register',
    loadChildren: async () => {
      const m = await import('./register/register.module');
      return m.RegisterModule;
    },
  },
  {
    path: 'login',
    loadChildren: async () => {
      const m = await import('./login/login.module');
      return m.LoginModule;
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
