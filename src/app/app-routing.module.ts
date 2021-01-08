import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//rutas
import {ProductosComponent} from './body/productos/productos.component';
import {LoginComponent} from './body/login/login.component';
import {UsuarioProductosComponent} from './body/usuario-productos/usuario-productos.component'

//authgard
import {AuthGuard } from './auth.guard';
import {AuthUsersGuard} from './auth-users.guard';
import { SinginComponent } from './body/singin/singin.component';
const routes: Routes = [
  {
    path:'',
    redirectTo:'tienda',
    pathMatch:'full'
  },
  {
    path:'productosAdmin',
    component:ProductosComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'crearCuenta',
    component:SinginComponent
  }
  ,
  {
    path:'tienda',
    component:UsuarioProductosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
