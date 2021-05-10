import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  public isAuthenticated(): boolean {
    if (!localStorage.getItem('UserAuthorize')) {
      return false;
    } else {
      return true;
    }
  }
}
