import { Component, OnInit } from '@angular/core';
import {Customer} from "../../model/customer";
import {Employee} from "../employee";

@Component({
  selector: 'app-employee-list4',
  templateUrl: './employee-list4.component.html',
  styleUrls: ['./employee-list4.component.css']
})
export class EmployeeList4Component implements OnInit {
  employees:Employee []
  constructor() {
    this.employees = [
      {id:1,fullName:"hello",dateOfBirth: new Date(2002,11,30),code:11111,numberPhone:'0905941637',email:"mkhanhaa@gamil.com",certificate:"trung cấp",place:"manager",salary:3000},
      {id:2,fullName:"hello",dateOfBirth: new Date(2002,9,5),code:11111,numberPhone:'0905941637',email:"mkhanhaa@gamil.com",certificate:"trung cấp",place:"manager",salary:3000},
      {id:3,fullName:"hello",dateOfBirth: new Date(2002,1,30),code:11111,numberPhone:'0905941637',email:"mkhanhaa@gamil.com",certificate:"trung cấp",place:"manager",salary:3000},
      {id:4,fullName:"hello",dateOfBirth: new Date(2002,2,30),code:11111,numberPhone:'0905941637',email:"mkhanhaa@gamil.com",certificate:"trung cấp",place:"manager",salary:3000},
      {id:5,fullName:"hello",dateOfBirth: new Date(2002,3,30),code:11111,numberPhone:'0905941637',email:"mkhanhaa@gamil.com",certificate:"trung cấp",place:"manager",salary:3000}
    ]
  }

  ngOnInit(): void {
  }
}
