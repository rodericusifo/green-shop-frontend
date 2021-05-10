import { environment } from './../../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IResponse } from '../interfaces/Response-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private _http: HttpClient) {}

  public getProductList(): Observable<HttpResponse<IResponse>> {
    return this._http
      .get<IResponse>(`${environment.apiBaseURL}products/list`, {
        responseType: 'json',
        observe: 'response',
      })
      .pipe(catchError(this._handlingError));
  }

  public getProductDetail(productID: string): Observable<HttpResponse<IResponse>> {
    return this._http
      .get<IResponse>(`${environment.apiBaseURL}products/${productID}/detail`, {
        responseType: 'json',
        observe: 'response',
      })
      .pipe(catchError(this._handlingError));
  }

  private _handlingError(err: HttpErrorResponse) {
    return throwError(err);
  }
}
