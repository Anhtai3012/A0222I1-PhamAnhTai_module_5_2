import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../model/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url="http://localhost:3000/employees"

  constructor(private httpClient:HttpClient) { }
   getAll() :Observable<Employee[]>{
    return  this.httpClient.get<Employee[]>(this.url)
   }

   getById(id:number):Observable<Employee>{
    return this.httpClient.get<Employee>(this.url+'/'+id);
   }

   createEmployee(employee:Employee):Observable<Employee>{
    console.log("service employee")
     console.log(employee.id)
     console.log(typeof employee.id)
    if(employee.id.toString() =='') {
      console.log("post")
      return this.httpClient.post<Employee>(this.url,employee)
    }
    else return this.httpClient.put(`${this.url}/${employee.id}`,employee)
   }

   deleteEmployee(id:number):Observable<void>{
     return this.httpClient.delete<void>(this.url+'/'+id)
   }
}
