import { Component, OnInit } from '@angular/core';
import {ProductosService} from '../../service/productos.service'
import { NgForm, FormControl,FormBuilder,FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditDialogComponent} from '../../PipesAndDialogs/edit-dialog/edit-dialog.component';
import {Producto} from '../../Models/productos.models';
import { Token } from '../../Models/token.model';




@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  
  reactiveForm:any=FormGroup;
  public userfile:any=File;
  constructor(
    public _servicioProductos:ProductosService,
    private fb:FormBuilder,
    public dialog:MatDialog
  ) { 
      this.reactiveForm=this.fb.group({
        nombre: ['',Validators.required],
        precio:['',Validators.required],
        stock:['',Validators.required]
      });

  }


  ngOnInit() {
    this.getProductos();
    
  }

  crearProducto(form:FormData){
    
    this._servicioProductos.crearProducto(form).subscribe(
      data=>{
        
        this.getProductos();
        
      },
      error=>{
        console.error(Error);
        
      }
    );
  }

  getProductos(){
    this._servicioProductos.getProductos().subscribe(
     data=>{
       this._servicioProductos.arrayProducto=data as [];
       console.log(this._servicioProductos.arrayProducto);
     }
    );
  }

  //eventos
  tomaImagen(event){
    const file=event.target.files[0];
    this.userfile=file;
    
  }
  enviarForm(form:FormGroup){
    if(form.valid){
      const objeto=form.value;
      const formData= new FormData();
      formData.append('nombre',(objeto.nombre));
      formData.append('precio',(objeto.precio));
      formData.append('stock',(objeto.stock));
      formData.append('foto',this.userfile);   
      this.crearProducto(formData);
      this.resetForm(form); 
    }else{
      console.log("error");
    }
  }

  resetForm(form?:FormGroup){
    
    form.reset();
  }
  
  //openDialog
  dialogo(producto:Producto){
    let dialog=  this.dialog.open(EditDialogComponent,{data:{producto}});
    dialog.afterClosed().subscribe(result=>{
      this.ngOnInit()
    })
     
  }

  

 
}

