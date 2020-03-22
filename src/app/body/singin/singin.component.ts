import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms'
import { SinginService } from 'src/app/service/singin.service';
import {MatSnackBar} from '@angular/material/snack-bar'

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

  logeado:boolean=false;
  // ReactiveForms:any=FormGroup;
  constructor(
    private fb:FormBuilder,
    public _singin:SinginService,
    private _snackBar:MatSnackBar
  ) { 
    // this.ReactiveForms=fb.group({
    //   username:['',Validators.required],
    //   password:['',Validators.required],
    //   nombre  :['',Validators.required],
    //   apellido:['',Validators.required],
    //   email   :['',Validators.required]
    // });
  }

  ngOnInit() {
  }

  crearUsuario(form:NgForm){
    this.logeado=true
    this._singin.crearUsuario(form.value).subscribe(data=>{
      console.log(data);
      this.resetForm(form);
      this.mensaje('usuario creado correctamente')
      this.logeado=false;
    },
    error=>{
      this.logeado=false;
      this.mensaje('problemas para crear el usuario, favor intentar nuevamente')
    });
  }

  mensaje(mensaje:string){
    let ok='ok';
    this._snackBar.open(mensaje,ok,{
      duration:1500,
      panelClass:['white-snackbar']
    })
  }

  resetForm(form?:NgForm){
    form.reset();
  }
}
