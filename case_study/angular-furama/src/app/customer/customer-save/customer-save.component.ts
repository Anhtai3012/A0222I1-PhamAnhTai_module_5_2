import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../service/customer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../../model/customer";
import {ToastrModule, ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-customer-save',
  templateUrl: './customer-save.component.html',
  styleUrls: ['./customer-save.component.css']
})
export class CustomerSaveComponent implements OnInit {
  customers :Customer;
  constructor(private customerService:CustomerService,
              private router :Router,
              private activatedRoute: ActivatedRoute,
              private toast :ToastrService
              ) {
  }

  registerForm: FormGroup

  ngOnInit(): void {
    this.createCustomer()
    if(this.router.url.includes("customer/create")) return;
    this.activatedRoute.paramMap.subscribe(next => {
      const id = next.get('id');
      this.customerService.getById(parseInt(id)).subscribe((data) => {
          this.customers = data;
          console.log(data);
          this.createCustomer()
      })
    })
  }

  createCustomer(){
    this.registerForm = new FormGroup({
      id: new FormControl(this.customers == undefined? '':this.customers.id),
      customerCode: new FormControl(this.customers == undefined? '':this.customers.customerCode,[
        Validators.required,
        Validators.min(1)
      ]),
      fullName: new FormControl(this.customers == undefined? '':this.customers.fullName,[
        Validators.minLength(8),
        Validators.required
      ]),
      phoneNumber: new FormControl(this.customers == undefined? '':this.customers.phoneNumber,[
        Validators.pattern('^09[0,1][0-9]{7}$'),
        Validators.required
      ]),
      identifyNumber: new FormControl(this.customers == undefined? '':this.customers.identifyNumber,[
        Validators.required
      ]),
      email: new FormControl(this.customers == undefined? '':this.customers.email,[
        Validators.required,Validators.email
      ]),
      dateOfBirth: new FormControl(this.customers == undefined? '':this.customers.dateOfBirth,[
        Validators.required
      ]),
    });
  }

  submitCustomer() {
    console.log(this.registerForm)
    this.customerService.CreateCustomer(this.registerForm.value).subscribe(next => {
      console.log('thanh cong')
      this.toast.success("them moi thanh cong")
      this.router.navigateByUrl("/customer-list")
    })
  }
}
