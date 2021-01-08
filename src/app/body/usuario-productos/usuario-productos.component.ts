import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/service/productos.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AddCarroComponent} from '../../PipesAndDialogs/add-carro/add-carro.component'

@Component({
  selector: 'app-usuario-productos',
  templateUrl: './usuario-productos.component.html',
  styleUrls: ['./usuario-productos.component.css']
})
export class UsuarioProductosComponent implements OnInit {

  constructor(
    public _servicioProductos:ProductosService,
    private dialog:MatDialog
  ) { }


  ngOnInit(): void {
    this.getProductos();
    
  }
  getProductos(){
    this._servicioProductos.getProductos().subscribe(
     data=>{
       this._servicioProductos.arrayProducto=data as [];
       console.log(this._servicioProductos.arrayProducto);
     }
    );
  }

  agregarProducto(producto:any){
    this.dialog.open(AddCarroComponent,{data:producto});
  }
}
