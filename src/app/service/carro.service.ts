import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Item} from '../Models/item.model'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CarroService {
  zuul:string = environment.zuulGateway;
  _url:string="/servicio/items/api/crear";
  endUrl:string;
  constructor(
    private _httpClient:HttpClient
  ) { 
    this.endUrl = `${this.zuul}${this._url}`
  }

  agregarACarro(item:Item){
    return this._httpClient.post(this.endUrl,item)
  }

}
