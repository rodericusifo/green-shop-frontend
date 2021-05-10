import { Subscription } from 'rxjs';
import { UserService } from './../shared/services/user.service';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  isLoaded!: boolean;
  registerUserSubscription!: Subscription;

  constructor(@Inject('M') private _M: any, private _userService: UserService) {
    this.isLoaded = true;
  }

  ngOnInit(): void {}

  registerUser(user: { email: string; password: string }) {
    this.isLoaded = false;
    this.registerUserSubscription = this._userService
      .registerUser(user)
      .subscribe(
        (response) => {
          console.log(response);
          this.isLoaded = true;
          this.registerUserSubscription.unsubscribe();
          this._M.toast({
            html: 'Registration Success',
            classes: 'green',
            displayLength: 2000,
          });
        },
        (err) => {
          console.log(err);
          this.isLoaded = true;
          this.registerUserSubscription.unsubscribe();
          this._M.toast({
            html: 'Registration Failed',
            classes: 'green',
            displayLength: 2000,
          });
        }
      );
  }
}
