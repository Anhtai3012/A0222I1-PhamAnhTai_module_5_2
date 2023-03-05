import {Component, EventEmitter, OnInit} from '@angular/core';
import {Customer} from "../../model/customer";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
 date:Date = new Date();
  customer:Customer;
  customers: Customer [] = [
    {id:1,fullName:'pham anh tai',customerCode:'KH-123',phoneNumber:"0905941637",identifyNumber:'123456',email:'mkhanhaa@gmail.com',dateOfBirth:new Date(2002,11,30)},
    {id:2,fullName:'do tien thanh',customerCode:'KH-123',phoneNumber:'0905941637',identifyNumber:'123456',email:'mkhanhaa@gmail.com',dateOfBirth:new Date(2002,11,30)},
    {id:3,fullName:'nguyen khai',customerCode:'KH-123',phoneNumber:'0905941637',identifyNumber:'123456',email:'mkhanhaa@gmail.com',dateOfBirth:new Date(2002,11,30)},
    {id:4,fullName:'pham the duyet',customerCode:'KH-123',phoneNumber:'0905941637',identifyNumber:'123456',email:'mkhanhaa@gmail.com',dateOfBirth:new Date(2002,11,30)},
    {id:4,fullName:'LE DUC HIEU',customerCode:'KH-124',phoneNumber:'0905941637',identifyNumber:'123456',email:'mkhanhaa@gmail.com',dateOfBirth:new Date(2002,11,30)}
  ]
  constructor() {

  }

  ngOnInit(): void {
  }

  detailInfo(item:Customer) {
    console.log('com here')
    this.customer=item;
  }

  searchText: string='';

  onSearchTextEntered(searchValue:string){
    this.searchText = searchValue;
    console.log(this.searchText);
  }

  temp: number;
  delete() {
    this.customers.splice(this.temp,1)
  }

  takeId(i: any) {
    this.temp = i;
    console.log(i)
  }
}
