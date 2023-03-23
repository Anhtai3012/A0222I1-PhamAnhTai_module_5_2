import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../../service/employee.service";
import {Employee} from "../../model/employee";
import {PositionEmployee} from "../../model/position-employee";
import {EducationEmployee} from "../../model/education-employee";
import {PositionEmployeeService} from "../../service/position-employee.service";
import {EducationEmployeeService} from "../../service/education-employee.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-employee-save',
  templateUrl: './employee-save.component.html',
  styleUrls: ['./employee-save.component.css']
})
export class EmployeeSaveComponent implements OnInit {
  employeeForm: FormGroup;
  employee: Employee;
  positionEmployees: PositionEmployee [] = [];
  educationEmployees: EducationEmployee [] = [];

  constructor(private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private employeeService: EmployeeService,
              private positionEmployeeService: PositionEmployeeService,
              private educationEmployeeService: EducationEmployeeService,
              private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.formEmployee();
    this.positionEmployees = this.positionEmployeeService.getAll();
    this.educationEmployeeService.getAll().subscribe(data => {
      this.educationEmployees = data;
    })
    if (this.router.url.includes('employee/create')) {
      return;
    }
    this.activatedRoute.paramMap.subscribe(next => {
      const id = +next.get("id")
      this.employeeService.getById(id).subscribe(data => {
        this.employee = data;
        console.log(data)
        this.formEmployee()
      })
    })
  }

  formEmployee() {
    console.log(this.employee)
    this.employeeForm = this.formBuilder.group({
      id: this.formBuilder.control( this.employee == undefined ? '' : this.employee.id),
      fullName: this.formBuilder.control(this.employee == undefined ? '' : this.employee.fullName, Validators.required),
      dateOfBirth: this.formBuilder.control(this.employee == undefined ? '' : this.employee.dateOfBirth, Validators.required),
      code: this.formBuilder.control(this.employee == undefined ? '' : this.employee.code, Validators.required),
      numberPhone: this.formBuilder.control(this.employee == undefined ? '' : this.employee.numberPhone, [Validators.required, Validators.pattern("^([0-9]{9})$")]),
      email: this.formBuilder.control(this.employee == undefined ? '' : this.employee.email, [Validators.required, Validators.email]),
      certificate: this.formBuilder.control(this.employee == undefined ? '' : this.employee.certificate, Validators.required),
      place: this.formBuilder.control(this.employee == undefined ? '' : this.employee.place, Validators.required),
      salary: this.formBuilder.control(this.employee == undefined ? '' : this.employee.salary, Validators.required),
    })
  }

  submitEmployee() {
    //this.employeeForm.value.id
    console.log(this.employeeForm)
    if(this.employeeForm.valid || this.employeeForm.value.id){
      console.log('here')
      console.log(this.employeeForm)
      console.log(this.employeeForm.value.id)
      if (this.employeeForm.value.id == "" && this.employeeForm.value.id !=null ){
    this.employeeService.createEmployee(this.employeeForm.value).subscribe((data) => {
      console.log(data.id)
      this.router.navigateByUrl("/employee-list").then(result => {
          this.toast.success("them moi thanh cong");
         return this.employeeForm.reset()
      })
    })
      }else{
        this.employeeService.createEmployee(this.employeeForm.value).subscribe((data) => {
          this.router.navigateByUrl("/employee-list").then(result => {
          this.toast.success("chinh sua thanh cong");
            this.employeeForm.reset()
          })
        })
      }
    }else {
      console.log(this.employeeForm.valid)
      this.toast.error("lỖI")
    }
  }

  compareFn(t1: any, t2: any): boolean {
    return t1 && t2 ? t1.id === t2.id : t1 === t2;
  }
}
