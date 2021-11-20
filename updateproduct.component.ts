import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { update } from 'src/Models/update';
import { UpdateService } from '../update.service';
import routes from '../app-routing.module';
import { Router, Routes } from '@angular/router';
@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  RegisterForm=new FormGroup({
    ProductId:new FormControl(),
    ProductName:new FormControl(),
          ActualPrice:new FormControl(),
        Discount:new FormControl(),
         Quantity:new FormControl(),
         Description:new FormControl(),
         ProductImage:new FormControl(),
         CategoryId:new FormControl(),
    
      });
  constructor(private m1:UpdateService) { }

  ngOnInit(): void {
  }
  SubmitData()
  {
  console.log(this.RegisterForm.value);
   let registerdet:update=new update();
   registerdet.ProductId=this.RegisterForm.value["ProductId"];
   registerdet.ProductName=this.RegisterForm.value["ProductName"];
   registerdet.ActualPrice=this.RegisterForm.value["ActualPrice"];
   registerdet.Discount=this.RegisterForm.value["Discount"];
   registerdet.Quantity=this.RegisterForm.value["Quantity"];
   registerdet.Description=this.RegisterForm.value["Description"];
   registerdet.ProductImage=this.RegisterForm.value["ProductImage"];
   registerdet.CategoryId=this.RegisterForm.value["CategoryId"];
  //  console.log("SendingData"+registerdet.Name);
   this.m1.updateproduct(registerdet);
   
}
}
  
