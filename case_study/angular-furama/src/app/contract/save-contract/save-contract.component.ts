import { Component, OnInit } from '@angular/core';
import {ContractService} from "../../service/contract.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Contract} from "../../model/contract";
import {Customer} from "../../model/customer";
import {Facility} from "../../model/facility";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-save-contract',
  templateUrl: './save-contract.component.html',
  styleUrls: ['./save-contract.component.css']
})
export class SaveContractComponent implements OnInit {
  contractForm :FormGroup
  contract:Contract;
  customers:Customer []=[];
  facilitys:Facility []=[];
  constructor(private contractService:ContractService,
              private router:Router,
              private activatedRoute:ActivatedRoute,
              private builder:FormBuilder,
              private toast :ToastrService) { }

  ngOnInit(): void {
    this.FormContract()
    this.contractService.getAllCustomer().subscribe((data)=>{
      this.customers = data;
    })
    this.contractService.getAllFacility().subscribe((data) =>{
      this.facilitys = data;
    })
    if(this.router.url.includes("contract/create")) {

      return;}
      console.log('edit')
    this.activatedRoute.paramMap.subscribe( (next) =>{
      const id = +next.get('id');
      this.contractService.getById(id).subscribe((data) =>{
        this.contract=data;
        this.FormContract()
      })
    })
  }

  FormContract(){
    this.contractForm = this.builder.group({
      id: this.builder.control( this.contract == undefined ? null : this.contract.id),
      contractCode: this.builder.control(this.contract == undefined ? '' : this.contract.contractCode,[Validators.required]),
      customerCode: this.builder.control(this.contract == undefined ? '' : this.contract.customerCode,[Validators.required]),
      facilityCode: this.builder.control(this.contract == undefined ? '' : this.contract.facilityCode,[Validators.required]),
      startDay: this.builder.control(this.contract == undefined ? '' : this.contract.startDay,[Validators.required]),
      endDay: this.builder.control(this.contract == undefined ? '' : this.contract.endDay,[Validators.required]),
      deposit: this.builder.control(this.contract == undefined ? '' : this.contract.deposit,[Validators.required,Validators.min(1)])
    })
  }

  submitContract(){
    console.log(this.contractForm)
    if (this.contractForm.valid){
      if(this.contractForm.value.id == null){
    this.contractService.createContract(this.contractForm.value).subscribe((data) => {
      console.log(data);
      console.log("save="+data.id)
      console.log(typeof data.id);
      this.router.navigateByUrl("/contract-list").then((next) =>{
        this.toast.success("them moi thanh cong")
        this.contractForm.reset();
      })
    })
      }else{
        this.contractService.createContract(this.contractForm.value).subscribe((data) => {
          console.log(data);
          console.log("save="+data.id)
          console.log(typeof data.id);
          this.router.navigateByUrl("/contract-list").then((next) =>{
            this.toast.success("chinh sua thanh cong")
            this.contractForm.reset();
          })
        })
      }
  } else {
      this.toast.error('Lỗi')
    }
  }

}
