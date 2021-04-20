import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient,private authenticator:AuthenticationService) { }
  login(username: string,password: string): Observable<any>{
    const body={username,password};
    const headers= new HttpHeaders();
    headers.set('Content-Type', 'text/plain');

    return this.http.post('http://localhost:3002/admin/login',body, {headers, responseType: 'text', observe: 'response'});
  }
  signup(username: string,password: string): Observable<any>{
    const body={username,password};
    const headers= new HttpHeaders();
    headers.set('Content-Type', 'text/plain');
    return this.http.post('http://localhost:3002/admin/',body, {headers, responseType: 'text', observe: 'response'});
  }
  getAll():Observable<any>{
    const token:any=this.authenticator.getAccessToken();
    const headers= new HttpHeaders({'x-auth-token': token});
    headers.set('Content-Type', 'application/json');
    return this.http.get('http://localhost:3002/admin',{headers: headers,  observe: 'response'})
  }
  delete(id:any): Observable<any>{
    const headers= new HttpHeaders();
    headers.set('Content-Type', 'text/plain');

    return this.http.delete('http://localhost:3002/admin/'+id, {headers, responseType: 'text', observe: 'response'});
  }
  reset(oldPassword: string,newPassword: string): Observable<any>{
    const token:any=this.authenticator.getAccessToken();
    const body={oldPassword,newPassword};
    const headers= new HttpHeaders({'x-auth-token': token}); 
    headers.set('Content-Type', 'application/json');
    headers.set('Content-Type', 'text/plain');
    return this.http.patch('http://localhost:3002/admin/',body, {headers, responseType: 'text', observe: 'response'});
  }
  
}
