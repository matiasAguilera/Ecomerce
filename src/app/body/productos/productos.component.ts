import { Component, OnInit } from '@angular/core';
import {ProductosService} from '../../service/productos.service'
import { NgForm, FormControl,FormBuilder,FormGroup, Validators } from '@angular/forms';




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
    private fb:FormBuilder
  ) { 
      this.reactiveForm=this.fb.group({
        nombre: ['',Validators.required],
        precio:['',Validators.required]
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
  
}
