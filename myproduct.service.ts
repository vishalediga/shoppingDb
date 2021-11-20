import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { flatten } from '@angular/compiler';
import { Router } from '@angular/router';
import { productModel } from 'src/Models/productModel';
@Injectable({
  providedIn: 'root'
})
export class MyproductService {
  public getApi:string="https://localhost:44316/api/customer/Get";
  constructor(private http:HttpClient) { }
  getEvents():Observable<Array<productModel>>{
    return this.http.get<Array<productModel>>(this.getApi);
  }
}