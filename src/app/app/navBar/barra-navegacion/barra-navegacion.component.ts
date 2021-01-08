import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {LoginComponent} from '../../../body/login/login.component'
@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {

  constructor(
    public _login:LoginService,
    public dialog:MatDialog
  ) { }

  ngOnInit() {
  }

  dialogo(){
    console.log('tti');
    const dialogRef=  this.dialog.open(LoginComponent);
    
   
   
   
  }
}
