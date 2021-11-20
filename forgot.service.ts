import { Injectable } from '@angular/core';
import { forgot } from 'src/Models/forgot';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { flatten } from '@angular/compiler';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ForgotService {

  public api='https://localhost:44316/api/customerinsert/customerforgot';
  mystatus:number=0;
  public getapi='https://localhost:44316/api/';

  constructor(private http:HttpClient,private r:Router) { }
  postlogin(registerdata:forgot){
    let endpoints="customerinsert/CustomerInsert";
    // let loginStatus:boolean=false;
    this.http.post(this.getapi+endpoints,registerdata).subscribe(
      (i:any) => { console.log(i.status);
        if(i.status==200)
          {this.r.navigate(['/customerlogin']);}
          else{
            this.r.navigate(['/wrong-user']);
          
          }
          return i.status;}
       
      );
}
updateCustomer(Register1:forgot){
  console.log("RegistrationData");
  console.log(Register1.EmailId);
  this.http.post(this.api,Register1).subscribe(
    (i:any) => { console.log(i.status);
      if(i.status==200)
        {this.r.navigate(['/customerlogin']);}
        else{
          this.r.navigate(['/wrong-user']);
        
        }
        return i.status;}
     
    );
}
}

