import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//rutas
import {ProductosComponent} from './body/productos/productos.component';
import {LoginComponent} from './body/login/login.component';

//authgard
import {AuthGuard } from './auth.guard';
import { SinginComponent } from './body/singin/singin.component';
const routes: Routes = [
  {
    path:'',
    redirectTo:'productosAdmin',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
