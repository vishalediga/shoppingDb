import { Component, OnInit } from '@angular/core';
//import { AdminLogin } from 'src/Models/AdminLogin';
import { productModel } from 'src/Models/productModel';
import { MyproductService } from '../myproduct.service';
@Component({
  selector: 'app-adminproductlist',
  templateUrl: './adminproductlist.component.html',
  styleUrls: ['./adminproductlist.component.css']
})
export class AdminproductlistComponent implements OnInit {
  productdata: Array<productModel>=[];
  constructor(private s:MyproductService) { }
  ngOnInit(): void {
    this.s.getEvents().subscribe(data => {
      this.productdata = data;
    });
  }
}
