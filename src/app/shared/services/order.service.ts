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
export class OrderService {
  constructor(private _http: HttpClient) {}

  public createOrder(
    userID: string,
    authorization: string,
    order: { buyerName: string; buyerAddress: string; buyerPhoneNumber: string }
  ): Observable<HttpResponse<IResponse>> {
    return this._http
      .post<IResponse>(
        `${environment.apiBaseURL}users/${userID}/orders/create`,
        order,
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

  public getOrderList(
    userID: string,
    authorization: string
  ): Observable<HttpResponse<IResponse>> {
    return this._http
      .get<IResponse>(`${environment.apiBaseURL}users/${userID}/orders/list`, {
        headers: new HttpHeaders({ Authorization: authorization }),
        responseType: 'json',
        observe: 'response',
      })
      .pipe(catchError(this._handlingError));
  }

  private _handlingError(err: HttpErrorResponse) {
    return throwError(err);
  }
}
