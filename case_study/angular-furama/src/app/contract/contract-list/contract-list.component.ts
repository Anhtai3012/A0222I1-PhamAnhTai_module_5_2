import { Component, OnInit } from '@angular/core';
import {Contract} from "../../model/contract";

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contracts: Contract [] = [
    {id:1,contractCode:'HD-123',customerCode:"KH-123",facilityCode:"CS-123",startDay:new Date(),endDay:new Date(),deposit:12345},
    {id:2,contractCode:'HD-124',customerCode:"KH-123",facilityCode:"CS-123",startDay:new Date(),endDay:new Date(),deposit:12345},
    {id:3,contractCode:'HD-125',customerCode:"KH-123",facilityCode:"CS-123",startDay:new Date(),endDay:new Date(),deposit:12345},
    {id:4,contractCode:'HD-126',customerCode:"KH-123",facilityCode:"CS-123",startDay:new Date(),endDay:new Date(),deposit:12345},
    {id:5,contractCode:'HD-127',customerCode:"KH-123",facilityCode:"CS-123",startDay:new Date(),endDay:new Date(),deposit:12345},
  ]

  temp:number;
  takeId(value:any) {
    console.log(value)
    this.temp=parseInt(value)
  }


  delete() {
    this.contracts.splice(this.temp,1);
  }
}
