import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { forgot } from 'src/Models/forgot';
import { ForgotService } from '../forgot.service';
import routes from '../app-routing.module';
import { Router, Routes } from '@angular/router';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  RegisterForm1=new FormGroup({
    EmailId:new FormControl(),
          Password:new FormControl()
        
      });
  constructor(private m1:ForgotService) { }

  ngOnInit(): void {
  }
  SubmitData()
  {
  console.log(this.RegisterForm1.value);
   let registerdet1:forgot=new forgot();
   registerdet1.EmailId=this.RegisterForm1.value["EmailId"];
   registerdet1.Password=this.RegisterForm1.value["Password"];
   
   
  //  console.log("SendingData"+registerdet.Name);
   this.m1.updateCustomer(registerdet1);
   
}
}

