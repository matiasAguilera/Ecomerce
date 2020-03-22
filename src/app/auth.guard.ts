import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './service/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _login:LoginService,
    private _router:Router
  ) {
    
  }

  canActivate(){
    if(this._login.logedIn()){
      return true;
    }else{
      this._router.navigate(['/login'])
      return false;
    }
    
  }
  
}
