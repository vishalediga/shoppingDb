import { Injectable } from '@angular/core';
import { update } from 'src/Models/update';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { flatten } from '@angular/compiler';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  public api='https://localhost:44316/api/admin/ProductUpdate';
  mystatus:number=0;
  public getapi='https://localhost:44316/api/';

  constructor(private http:HttpClient,private r:Router) { }
  postlogin(registerdata:update){
    let endpoints="admin/ProductUpdate";
    // let loginStatus:boolean=false;
    this.http.post(this.getapi+endpoints,registerdata).subscribe(
      (i:any) => { console.log(i.status);
        if(i.status==200)
          {this.r.navigate(['/adminlogin']);}
          else{
            this.r.navigate(['/wrong-user']);
          
          }
          return i.status;}
       
      );
}
updateproduct(Register1:update){
  console.log("RegistrationData");
  console.log(Register1.ProductId);
  this.http.post(this.api,Register1).subscribe(
    (i:any) => { console.log(i.status);
      if(i.status==200)
        {this.r.navigate(['/adminproductlist'])
      alert("your product is updated");}
        else{
         // this.r.navigate(['/wrong-user']);
        alert("product is not updated");
        }
        return i.status;}
     
    );
}
}


