import { AuthService } from './auth.service';
import { Inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(
    @Inject('M') private _M: any,
    private _authService: AuthService,
    private _router: Router
  ) {}

  canActivate(): boolean {
    if (!this._authService.isAuthenticated()) {
      this._router.navigate(['/login']);
      this._M.toast({
        html: 'You need do Login first',
        classes: 'green',
        displayLength: 2000,
      });
      return false;
    } else {
      return true;
    }
  }
}
