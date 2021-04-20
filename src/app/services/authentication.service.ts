import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient,private router:Router) { }


  
  setAccessToken(token:string){
    localStorage.setItem('access_token',token);
  }

  getAccessToken(){
    return localStorage.getItem('access_token'); 
  }

  get isLoggedIn(){
    return (localStorage.getItem('access_token')!==null)?true:false;
  }

  logout(){
    localStorage.removeItem('access_token');
  }

}
