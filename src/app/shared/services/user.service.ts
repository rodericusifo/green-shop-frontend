import { environment } from './../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResponse } from '../interfaces/Response-interface';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _http: HttpClient) {}

  public registerUser(user: {
    email: string;
    password: string;
  }): Observable<HttpResponse<IResponse>> {
    return this._http
      .post<IResponse>(`${environment.apiBaseURL}users/register`, user, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        observe: 'response',
      })
      .pipe(catchError(this._handlingError));
  }

  public loginUser(user: {
    email: string;
    password: string;
  }): Observable<HttpResponse<IResponse>> {
    return this._http
      .post<IResponse>(`${environment.apiBaseURL}users/login`, user, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        observe: 'response',
      })
      .pipe(catchError(this._handlingError));
  }

  public logoutUser(): void {
    localStorage.removeItem('UserAuthorize');
  }

  private _handlingError(err: HttpErrorResponse) {
    return throwError(err);
  }
}
