import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Item} from '../../Models/item.model'
import { CarroService } from 'src/app/service/carro.service';
@Component({
  selector: 'app-add-carro',
  templateUrl: './add-carro.component.html',
  styleUrls: ['./add-carro.component.css']
})
export class AddCarroComponent implements OnInit {

  cantidadProductos:number;
  item:Item;
  constructor(
    @Inject(MAT_DIALOG_DATA) public producto:any,
    private dialogRef: MatDialogRef<AddCarroComponent>,
    private _service:CarroService
  ) { }

  ngOnInit(): void {
  
  }

  agregarCarro(){
    this.item=new Item;
    this.item.cantidad=this.cantidadProductos;
    this.item.producto=this.producto;
    this.item.producto.foto=null;
    this._service.agregarACarro(this.item).subscribe((data:any)=>{
      console.log(data);
    });
  }

}
