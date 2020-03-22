import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpHeaders} from '@angular/common/http';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(
    private _login:LoginService
  ) { }
  
  intercept(req,next){
    let tokenReq=req.clone({
      setHeaders:{
        Authorization:`Bearer ${this._login.getToken()}`
      }
    });
    return next.handle(tokenReq);
  }

  getToken():HttpHeaders{
    if(this._login.logedIn()){
     var header=new HttpHeaders({
        'Authorization':`Bearer ${this._login.getToken()}`
        });
    }
    return header;
  }
  
}
