import { Component, OnInit,Inject} from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog';
import {Producto} from '../../Models/productos.models';
import { ProductosService } from 'src/app/service/productos.service';
@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {
  
  precio:number=this.data.producto.precio;
  agregar:Producto;
  datos:any;
  constructor (@Inject(MAT_DIALOG_DATA) public data:any,
                private _servicio:ProductosService,
                private dialogRef: MatDialogRef<EditDialogComponent>
              ) { }
  nombre:string;
  ngOnInit(): void {
    
  }
  probar(){
    console.log(this.data);
  }
  agregarAStock(){
    this.datos={ precio:this.precio,stock:this.agregar};
    this._servicio.putStock(this.data.producto.id,this.datos).subscribe(datos=>{
      console.log(datos);
    }
    );
    this.dialogRef.close();
  }
}
