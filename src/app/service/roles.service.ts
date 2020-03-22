import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(
    private _http:HttpClient
  ){

  }
  url:string="http://localhost:8765/roles";

  getAllRole():any{

    return this._http.get(this.url);
  }
}
