import { Component, OnInit } from '@angular/core';
import {Employee} from "../../model/employee";
import {EmployeeService} from "../../service/employee.service";
import {PositionEmployeeService} from "../../service/position-employee.service";
import {PositionEmployee} from "../../model/position-employee";
import * as alertify from 'alertifyjs'



@Component({
  selector: 'app-employee-list4',
  templateUrl: './employee-list4.component.html',
  styleUrls: ['./employee-list4.component.css']
})
export class EmployeeList4Component implements OnInit {

  page: number = 1;
  count: number = 0;
  tableSize: number = 3;

  employees:Employee []
  positions:PositionEmployee[] = [];
  constructor(private employeeService:EmployeeService,
              private positionEmployeeService: PositionEmployeeService) {
  }

  ngOnInit(): void {
    this.findAll();
  }
  findAll(){
    this.positions = this.positionEmployeeService.getAll();
    this.employeeService.getAll().subscribe(next => {
      this.employees=next;
    })
  }

  deleteEmployee(id: number) {
    alertify.confirm("Remove Employee", "do you want remove this employee?", () => {
     this.employeeService.deleteEmployee(id).subscribe(next =>{
       console.log('delete')
       this.ngOnInit();
     })
    }, function () {})
  }

  searchText: string='';
  onSearchTextEntered(searchValue:string){
    this.searchText = searchValue;
    console.log(this.searchText);
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.findAll();
  }

}
