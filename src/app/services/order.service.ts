import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient,
    private authenticator: AuthenticationService
  ) { }
  getAll(): Observable<any> {
    const token: any = this.authenticator.getAccessToken();
    const headers = new HttpHeaders({ 'x-auth-token': token });
    console.log(token)
    headers.set('Content-Type', 'application/json');
    return this.http.get('http://localhost:3002/orders', { headers: headers, observe: 'response' })
  }

  setStatus(id: any, body: any): Observable<any> {
    const token: any = this.authenticator.getAccessToken();
    const headers = new HttpHeaders({ 'x-auth-token': token });
    headers.set('Content-Type', 'application/json');
    return this.http.patch('http://localhost:3002/orders/' + id, body, { headers: headers, observe: 'response' })
  }

}