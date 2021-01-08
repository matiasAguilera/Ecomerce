import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Item} from '../Models/item.model'
@Injectable({
  providedIn: 'root'
})
export class CarroService {

  _url:string="http://localhost:8090/servicio/items/api/crear";
  constructor(
    private _httpClient:HttpClient
  ) { }

  agregarACarro(item:Item){
    return this._httpClient.post(this._url,item)
  }

}
