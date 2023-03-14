import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contract} from "../model/contract";
import {Facility} from "../model/facility";
import {Customer} from "../model/customer";

@Injectable({
  providedIn: 'root'
})
export class ContractService {
 url="http://localhost:3000/contracts"
  url_Facility="http://localhost:3000/facility"
  url_Customer="http://localhost:3000/customers"
  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Contract[]>{
   return this.httpClient.get<Contract[]>(this.url);
  }

  getAllFacility():Observable<Facility[]> {
   return this.httpClient.get<Facility[]>(this.url_Facility)
  }

  getAllCustomer():Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.url_Customer)
  }

  deleteContract(id:number):Observable<void>{
   return this.httpClient.delete<void>(this.url+'/'+id);
  }

  createContract(contract :Contract):Observable<Contract> {
   if (contract.id ==null) return this.httpClient.post(this.url,contract);
   return this.httpClient.put<Contract>(this.url+'/'+contract.id,contract)
  }

  getById(id:number):Observable<Contract>{
   return  this.httpClient.get<Contract>(this.url+'/'+id)
  }
}
