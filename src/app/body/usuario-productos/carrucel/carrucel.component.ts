import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-carrucel',
  templateUrl: './carrucel.component.html',
  styleUrls: ['./carrucel.component.css']
})
export class CarrucelComponent implements OnInit {

  constructor(
    public _service:ProductosService
  ) { }

  ngOnInit(): void {
  }

}
