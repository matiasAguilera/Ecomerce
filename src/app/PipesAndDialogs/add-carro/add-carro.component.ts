import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Item} from '../../Models/item.model'
import { CarroService } from 'src/app/service/carro.service';
import { LoginService } from 'src/app/service/login.service';
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
    private _service:CarroService,
    private _login:LoginService
  ) { }

  ngOnInit(): void {
  
  }

  agregarCarro(){
    this.item=new Item;
    this.item.id = this._login.user();
    this.item.cantidad=this.cantidadProductos;
    this.item.producto=this.producto;
    this.item.producto.foto=null;
    console.log(this.item);
    this._service.agregarACarro(this.item).subscribe((data:any)=>{
      console.log(data);
    });
  }

}
