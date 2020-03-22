import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  constructor(
    private _httpClient:HttpClient
  ) { }
}
