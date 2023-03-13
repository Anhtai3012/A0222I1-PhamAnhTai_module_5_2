import { Component, OnInit } from '@angular/core';
import {Contract} from "../../model/contract";
import {ContractService} from "../../service/contract.service";
import {Customer} from "../../model/customer";
import {Facility} from "../../model/facility";

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contracts : Contract[]=[];
  customers :Customer [] =[];
  facilitys :Facility [] =[];
  constructor(private contractService:ContractService) { }

  ngOnInit(): void {
    this.contractService.getAll().subscribe((data)=>{
      this.contracts = data;
    })
    this.contractService.getAllCustomer().subscribe((data) =>{
      this.customers = data
    })
    this.contractService.getAllFacility().subscribe((data) =>{
      this.facilitys = data
    })
  }

  temp:number;
  takeId(value:any) {
    console.log(value)
    this.temp=parseInt(value)
  }


}
