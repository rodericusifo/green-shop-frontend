import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IResponse } from '../interfaces/Response-interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private _http: HttpClient) {}

  public createCart(
    userID: string,
    authorization: string,
    cart: { quantity: number; ProductID: string }
  ): Observable<HttpResponse<IResponse>> {
    return this._http
      .post<IResponse>(
        `${environment.apiBaseURL}users/${userID}/carts/create`,
        cart,
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: authorization,
          }),
          observe: 'response',
        }
      )
      .pipe(catchError(this._handlingError));
  }

  public getCartList(
    userID: string,
    authorization: string
  ): Observable<HttpResponse<IResponse>> {
    return this._http
      .get<IResponse>(`${environment.apiBaseURL}users/${userID}/carts/list`, {
        headers: new HttpHeaders({ Authorization: authorization }),
        responseType: 'json',
        observe: 'response',
      })
      .pipe(catchError(this._handlingError));
  }

  public editCart(
    userID: string,
    cartID: string,
    authorization: string,
    cart: { quantity: number }
  ): Observable<HttpResponse<IResponse>> {
    return this._http
      .put<IResponse>(
        `${environment.apiBaseURL}users/${userID}/carts/${cartID}/edit`,
        cart,
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: authorization,
          }),
          observe: 'response',
        }
      )
      .pipe(catchError(this._handlingError));
  }

  public deleteCart(
    userID: string,
    cartID: string,
    authorization: string
  ): Observable<HttpResponse<IResponse>> {
    return this._http
      .delete<IResponse>(
        `${environment.apiBaseURL}users/${userID}/carts/${cartID}/delete`,
        {
          headers: new HttpHeaders({
            Authorization: authorization,
          }),
          observe: 'response',
        }
      )
      .pipe(catchError(this._handlingError));
  }

  private _handlingError(err: HttpErrorResponse) {
    return throwError(err);
  }
}
