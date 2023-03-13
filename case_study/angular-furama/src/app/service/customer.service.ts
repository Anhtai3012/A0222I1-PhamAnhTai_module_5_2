import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../model/customer";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers:Customer [] = [];
  url = "http://localhost:3000/customers/";
  constructor(private httpClient:HttpClient) { }
  getAll():Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(this.url);
  }

  CreateCustomer(customer:Customer) :Observable<Customer>{
    if(customer.id == null)return this.httpClient.post(this.url,customer);
    return this.httpClient.put(`${this.url}${customer.id}`,customer)
  }

  deleteCustomer(id:number):Observable<void>{
    return this.httpClient.delete<void>(this.url+id)
  }

  getById(id:number):Observable<Customer>{
    return this.httpClient.get<Customer>(this.url+id)
  }

}
