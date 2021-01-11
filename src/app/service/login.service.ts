import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class LoginService {

  zuul:string = environment.zuulGateway;
  url:string="/servicio/security/oauth/token";
  endUrl:string;
  constructor(
    private _HttpClient:HttpClient,
    private _router:Router,
  ) { 
    this.endUrl = `${this.zuul}${this.url}`
  }
  clients:string="frontendapp:12345";
  
  login(data:string){
    
    const headers=new HttpHeaders({
      'Content-Type':'application/x-www-form-urlencoded',
      'Authorization':`Basic ${btoa(this.clients)}`
    });
    
    return this._HttpClient.post(this.endUrl,data,{
      headers
    });
    
  }

  logedIn():boolean{
    return !!localStorage.getItem('iA123');
  }
  getToken(){
    
    return localStorage.getItem('iA123');
  }
  
  logout():void{
    localStorage.clear();
    this._router.navigate(['/tienda']);
  }

  isAdmin():boolean{
    
    let token2=localStorage.getItem('iA123')
    let arrayToken=token2.split('.');
    let payload=arrayToken[1];
    let token1=(atob(payload));
    let json=JSON.parse(token1);
    let autorities:string=json.authorities;
    if(autorities.includes('ROLE_ADMIN'))
    {
      return true
    }
  }
  isUser(){
    let token2=localStorage.getItem('iA123')
    let arrayToken=token2.split('.');
    let payload=arrayToken[1];
    let token1=(atob(payload));
    let json=JSON.parse(token1);
    let autorities:string=json.authorities;
    if(autorities.includes('ROLE_USER'))
    {
      return true
    }
  }
  user(){
    let token2=localStorage.getItem('iA123')
    let arrayToken=token2.split('.');
    let payload=arrayToken[1];
    let token1 = (atob(payload));
    let json=JSON.parse(token1);
    let user:string = json.user_name;
    return user;
  }
  
}
