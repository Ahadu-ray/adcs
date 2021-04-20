import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from './authentication.service';
import { ItemRegisterModel } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor(
    private http: HttpClient,
    private authenticator: AuthenticationService
  ) {
  }

  getAll(): Observable<any> {
    const token: any = this.authenticator.getAccessToken();
    const headers = new HttpHeaders({ 'x-auth-token': token });

    headers.set('Content-Type', 'application/json');
    return this.http.get('http://localhost:3002/items', { headers: headers, observe: 'response' })
  }

  addItem(body: ItemRegisterModel): Observable<any> {
    const token: any = this.authenticator.getAccessToken();
    const headers = new HttpHeaders({ 'x-auth-token': token });

    headers.set('Content-Type', 'application/json');
    return this.http.post('http://localhost:3002/items', body, { headers: headers, observe: 'response' });
  }

  uploadImage(id: any, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', file);
    const token: any = this.authenticator.getAccessToken();
    const headers = new HttpHeaders({ 'x-auth-token': token });

    headers.set('Content-Type', 'application/json');

    return this.http.put('http://localhost:3002/items/upload/' + id, formData, { headers: headers, observe: 'response' });
  }

  editItem(id: any, body: ItemRegisterModel): Observable<any> {
    const token: any = this.authenticator.getAccessToken();
    const headers = new HttpHeaders({ 'x-auth-token': token });
    headers.set('Content-Type', 'application/json');
    return this.http.patch('http://localhost:3002/items/' + id, body, { headers: headers, observe: 'response' });
  }
  delete(id: any): Observable<any> {
    const token: any = this.authenticator.getAccessToken();
    const headers = new HttpHeaders({ 'x-auth-token': token });
    headers.set('Content-Type', 'text/plain');

    return this.http.delete('http://localhost:3002/items/' + id, { headers, responseType: 'text', observe: 'response' });
  }

  changestatus(id: any, availability: boolean): Observable<any> {
    const token: any = this.authenticator.getAccessToken();
    const headers = new HttpHeaders({ 'x-auth-token': token });
    headers.set('Content-Type', 'text/plain');
    var body = { "availability": availability }
    return this.http.put('http://localhost:3002/items/' + id, body, { headers, responseType: 'text', observe: 'response' });
  }
}
