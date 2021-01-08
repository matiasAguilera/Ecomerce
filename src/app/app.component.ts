import { Component } from '@angular/core';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecomerce';
  
  constructor(
    private _service:LoginService
  ){

  }
  estaLogeado(){
    return this._service.logedIn();
  }
}
