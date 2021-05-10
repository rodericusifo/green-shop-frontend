import { UserService } from './shared/services/user.service';
import { AuthService } from './shared/services/auth.service';
import { Component, ElementRef, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    @Inject('M') private _M: any,
    private _elRef: ElementRef,
    private _authService: AuthService,
    private _userService: UserService
  ) {}

  ngOnInit(): void {
    this.initSidenav();
  }

  // Intialisator
  initSidenav(): void {
    const sidenavs = this._elRef.nativeElement.querySelectorAll('.sidenav');
    this._M.Sidenav.init(sidenavs);
  }

  // Triggered by an event
  closeSidenav(): void {
    const sidenavs = this._elRef.nativeElement.querySelectorAll('.sidenav');
    sidenavs.forEach((sidenav: Element) => {
      this._M.Sidenav.getInstance(sidenav).close();
    });
  }

  onLogged(): boolean {
    return this._authService.isAuthenticated();
  }

  onLogout(): void {
    this._userService.logoutUser();
  }
}
