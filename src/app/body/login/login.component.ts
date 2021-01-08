import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormBuilder} from '@angular/forms'
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ReactiveForms:any=FormGroup;
  logeado:boolean=false;
  constructor(
    private fb:FormBuilder,
    private _login:LoginService,
    private _router:Router,
    private _snakBar:MatSnackBar,
    private dialogRef: MatDialogRef<LoginComponent>
  ) { 
    this.ReactiveForms=this.fb.group({
      nombre:['',Validators.required],
      password:['',Validators.required]
    });
  }

  ngOnInit() {
  }

  logIn(form:FormGroup){
    
    this.logeado=true;
    const objeto=form.value;
    
    const formObjet=`username=${objeto.nombre}&password=${objeto.password}&grant_type=password`
     
    
      this._login.login(formObjet).subscribe((data:any)=>{
        localStorage.setItem('iA123',data.access_token);
        this.logeado=false;
        this.mensaje('iniciando sesión')
        if(this._login.isAdmin())
        {
          this._router.navigate(['productosAdmin']);
          
        }else{
          this._router.navigate(['tienda']);
          
        }
        this.dialogRef.close();
      },
      error=>{
        this.logeado=false;
        this.mensaje('error al iniciar sesión, intentar nuevamente')
      })
      
  }
  mensaje(mensaje:string){
    let ok='ok';
    this._snakBar.open(mensaje,ok,{
      duration:1500,panelClass:['white-snackbar']
    })
  }
}
