import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  url:string="http://localhost:8090/servicio/security/oauth/token";

  constructor(
    private _HttpClient:HttpClient,
    private _router:Router,
  ) { }
  clients:string="frontendapp:12345";
  
  login(data:string){
    
    const headers=new HttpHeaders({
      'Content-Type':'application/x-www-form-urlencoded',
      'Authorization':`Basic ${btoa(this.clients)}`
    });
    
    return this._HttpClient.post(this.url,data,{
      headers
    });
    
  }

  logedIn():boolean{
    return !!localStorage.getItem('iA123');
  }
  getToken(){
    
    return localStorage.getItem('iA123');
  }
  
  logout(){
    localStorage.clear();
    this._router.navigate(['/login']);
  }
}
