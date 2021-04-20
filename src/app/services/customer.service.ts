import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from './authentication.service';
import { ItemRegisterModel } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(
    private http: HttpClient,
    private authenticator:AuthenticationService
  ) {
  }
  
  getAll():Observable<any>{
    const token:any=this.authenticator.getAccessToken();
    const headers= new HttpHeaders({'x-auth-token': token});
    
    headers.set('Content-Type', 'application/json');
    return this.http.get('http://localhost:3002/customers',{headers: headers,  observe: 'response'})
  }

  updateBalance(id:any,balance:any):Observable<any>{
    const token:any=this.authenticator.getAccessToken();
    const headers= new HttpHeaders({'x-auth-token': token});
    const body={"balance":balance};
    headers.set('Content-Type', 'application/json');
    return this.http.patch('http://localhost:3002/customers/balance/'+id,
    body,
    {headers: headers,  observe: 'response'})
  }
  delete(id:any): Observable<any>{
    const token:any=this.authenticator.getAccessToken();
    const headers= new HttpHeaders({'x-auth-token': token});
    headers.set('Content-Type', 'text/plain');

    return this.http.delete('http://localhost:3002/customers/'+id, {headers, responseType: 'text', observe: 'response'});
  }
}
