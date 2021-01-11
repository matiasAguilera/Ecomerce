import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Producto} from '../Models/productos.models'
import { Observable } from 'rxjs';
import { TokenInterceptorService } from './token-interceptor.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  zuul:string = environment.zuulGateway
  url:string="/servicio/productos";
  arrayProducto:Producto[];
  headers=new HttpHeaders;
  arrayFotos:Blob;
  endUrl:string;
  constructor(
    private _httpClient:HttpClient,
    private _token:TokenInterceptorService
    ) { 
      this.headers.append("content-type","multipart/form-data");
      this.endUrl= `${this.zuul}${this.url}`
    }

  crearProducto(producto:FormData):Observable<any>{
    console.log(this._token.getToken());
    return this._httpClient.post(`${this.endUrl}/api`,producto,{
      headers:this._token.getToken()
    })
  }

  getProductos(){
    return this._httpClient.get(`${this.endUrl}/lista`,{
      headers:this._token.getToken()
    });
  }

  getImgProduct():Observable<Blob>{
    return this._httpClient.get(`${this.endUrl}/lista/img/1`,{
      headers:this._token.getToken(),responseType: 'blob' 
    });
    
  }

  putStock(id:any,stock:any){
    return this._httpClient.put(`${this.endUrl}/api/stock/${id}`,stock,{
      headers:this._token.getToken()
    });
  }
 
  deleteProducto(id:string){
    return this._httpClient.delete(`${this.endUrl}/api/${id}`,{
      headers:this._token.getToken()
    });
  }
}
