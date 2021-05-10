import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLoaded!: boolean;
  loginUserSubscription!: Subscription;

  constructor(
    @Inject('M') private _M: any,
    private _userService: UserService,
    private _router: Router
  ) {
    this.isLoaded = true;
  }

  ngOnInit(): void {}

  loginUser(user: { email: string; password: string }) {
    this.isLoaded = false;
    this.loginUserSubscription = this._userService.loginUser(user).subscribe(
      (response) => {
        console.log(response);
        localStorage.setItem(
          'UserAuthorize',
          JSON.stringify(response.body!.data)
        );
        this.isLoaded = true;
        this.loginUserSubscription.unsubscribe();
        this._router.navigate(['/home']);
        this._M.toast({
          html: 'Login Success',
          classes: 'green',
          displayLength: 2000,
        });
      },
      (err) => {
        console.log(err);
        this.isLoaded = true;
        this.loginUserSubscription.unsubscribe();
        this._M.toast({
          html: 'Login Failed',
          classes: 'green',
          displayLength: 2000,
        });
      }
    );
  }
}
