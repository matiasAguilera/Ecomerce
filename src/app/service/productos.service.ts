import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Producto} from '../Models/productos.models'
import { Observable } from 'rxjs';
import { TokenInterceptorService } from './token-interceptor.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  url:string="http://localhost:8090/servicio/productos";
  arrayProducto:Producto[];
  headers=new HttpHeaders;
  arrayFotos:Blob;
  constructor(
    private _httpClient:HttpClient,
    private _token:TokenInterceptorService
    ) { 
      this.headers.append("content-type","multipart/form-data")
    }

  crearProducto(producto:FormData):Observable<any>{
    console.log(this._token.getToken());
    return this._httpClient.post(`${this.url}/crear`,producto,{
      headers:this._token.getToken()
    })
  }

  getProductos(){
    return this._httpClient.get(this.url,{
      headers:this._token.getToken()
    });
  }
  getImgProduct():Observable<Blob>{
    return this._httpClient.get(`${this.url}/img/1`,{
      headers:this._token.getToken(),responseType: 'blob' 
    });
    
  }
}
