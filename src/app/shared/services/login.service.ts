import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ApiOptions {
  headers?: HttpHeaders | { [header: string]: string | string[] };
  params?: HttpParams | { [param: string]: string | string[] };
  [key: string]: any;
}


@Injectable({ providedIn: 'root' })
export class LoginService {
  url: string = 'https://vercel-bkend.vercel.app';
  constructor(private httpClient: HttpClient) {}

  public loginWithFacebook(options?: ApiOptions): Observable<any> {
    return this.httpClient.get(`${this.url}/facebook`, { ...options });
  }
}
