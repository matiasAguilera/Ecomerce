//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//providers//todo
import { RouterOutlet } from '@angular/router';
import {AuthGuard} from './auth.guard';
import {AuthUsersGuard} from './auth-users.guard';
import { TokenInterceptorService } from './service/token-interceptor.service';

//components
import { SinginComponent } from './body/singin/singin.component';
import { LoginComponent } from './body/login/login.component';
import { UsuarioComponent } from './body/usuario/usuario.component';
import { CarroComponent } from './body/carro/carro.component';
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './app/navBar/barra-navegacion/barra-navegacion.component';
import { ProductosComponent } from './body/productos/productos.component';
//materialio
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { EditDialogComponent } from './PipesAndDialogs/edit-dialog/edit-dialog.component';
import {MatCardModule} from '@angular/material/card';
import { UsuarioProductosComponent } from './body/usuario-productos/usuario-productos.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarrucelComponent } from './body/usuario-productos/carrucel/carrucel.component';
import { FooterComponent } from './body/footer/footer.component';
import { AddCarroComponent } from './PipesAndDialogs/add-carro/add-carro.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    UsuarioComponent,
    CarroComponent,
    LoginComponent,
    ProductosComponent,
    SinginComponent,
    EditDialogComponent,
    UsuarioProductosComponent,
    CarrucelComponent,
    FooterComponent,
    AddCarroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatInputModule,
    MatDialogModule,
    MatCardModule,MDBBootstrapModule
    
  ],
  providers: [
    AuthGuard,
    AuthUsersGuard
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
