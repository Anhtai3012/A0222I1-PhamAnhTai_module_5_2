import {Component, EventEmitter, OnInit} from '@angular/core';
import {Customer} from "../../model/customer";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customer:Customer;
  customers: Customer [] = [
    {id:1,fullName:'pham anh tai',customerCode:'KH-123',phoneNumber:"0905941637",identifyNumber:'123456',email:'mkhanhaa@gmail.com',dateOfBirth:new Date()},
    {id:2,fullName:'do tien thanh',customerCode:'KH-123',phoneNumber:'0905941637',identifyNumber:'123456',email:'mkhanhaa@gmail.com',dateOfBirth:new Date()},
    {id:3,fullName:'nguyen khai',customerCode:'KH-123',phoneNumber:'0905941637',identifyNumber:'123456',email:'mkhanhaa@gmail.com',dateOfBirth:new Date()},
    {id:4,fullName:'pham the duyet',customerCode:'KH-123',phoneNumber:'0905941637',identifyNumber:'123456',email:'mkhanhaa@gmail.com',dateOfBirth:new Date()},
  ]
  constructor() { }

  ngOnInit(): void {
  }

  detailInfo(item:Customer) {
    this.customer=item;
  }

  searchText: string='';

  onSearchTextEntered(searchValue:string){
    this.searchText = searchValue;
    console.log(this.searchText)
  }


}
