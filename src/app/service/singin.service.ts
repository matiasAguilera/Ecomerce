import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { TokenInterceptorService } from './token-interceptor.service';
import {Usuario,Role} from '../Models/usuario.model'
import { NgForm } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class SinginService {

  usuarioSelected:Usuario;
  role:Role;
  _url:string="http://localhost:8090/servicio/usuarios";
  headers=new HttpHeaders;


  constructor(
    private _http:HttpClient,
    private _token:TokenInterceptorService
  ) {
      this.usuarioSelected=new Usuario()
      
   }


  crearUsuario(from:Usuario){

    console.log(from);
    this.role=new Role;
    this.role.id=1;
    this.role.nombre="ROLE_USER"
      
     this.usuarioSelected.userName=from.userName;
     this.usuarioSelected.password=from.password;
     this.usuarioSelected.nombre=from.nombre;
     this.usuarioSelected.apellido=from.apellido;
     this.usuarioSelected.email=from.email;
     this.usuarioSelected.enabled=true;
     this.usuarioSelected.roles=[this.role];
     return this._http.post(this._url,this.usuarioSelected);
  }
}
