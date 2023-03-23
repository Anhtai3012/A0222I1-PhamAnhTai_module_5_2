import {Component, OnChanges, OnInit, PipeTransform} from '@angular/core';
import {Contract} from "../../model/contract";
import {ContractService} from "../../service/contract.service";
import {Customer} from "../../model/customer";
import {Facility} from "../../model/facility";
import alertify from "alertifyjs";
import {ToastrService} from "ngx-toastr";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {

  formSearch :FormGroup
  page: number = 1;
  tableSize: number = 3;
  configurationPage:any;


  contracts : Contract[]=[];
  customers :Customer [] =[];
  facilitys :Facility [] =[];
  constructor(private contractService:ContractService,
              private toast:ToastrService,
              private builder:FormBuilder) { }

  ngOnInit(): void {
    this.formSearchAll()
    this.getAllContract('','');
    this.contractService.getAllCustomer().subscribe((data) =>{
      this.customers = data
    })
    this.contractService.getAllFacility().subscribe((data) =>{
      this.facilitys = data
    })
  }
  // findAll(){
  //   // this.contractService.getAll().subscribe((data)=>{
  //   //   this.contracts = data;
  //   // })
  //   this.getAllContract('');
  // }

  formSearchAll(){
    this.formSearch = this.builder.group({
      contractCode: this.builder.control(''),
      deposit: this.builder.control('')
    })
  }

  getAllContract(id,deposit){
    this.contractService.searchGetAll(id,deposit).subscribe((data) =>{
      this.contracts = data;
      this.configurationPage ={
        itemsPerPage: this.tableSize,
        currentPage: this.page,
        totalItems : this.contracts.length
      }
    })
  }



  deleteContract(id:number){
    alertify.confirm("Remove Contract", "do you want remove this contract?", () => {
      this.contractService.deleteContract(id).subscribe((next) => {
        console.log("delete")
        this.ngOnInit()
      });
    }, function () {

    })
  }


  onTableDataChange(event: any) {

   this.page=event


  }

  searchAll(){
    console.log( typeof this.formSearch.value.contractCode)
    console.log( this.formSearch.value.contractCode)
    console.log( typeof this.formSearch.value.deposit)
    console.log( this.formSearch.value.deposit)
    this.getAllContract(this.formSearch.value.contractCode.trim(),this.formSearch.value.deposit)
  }

  reset(){
    this.formSearch.reset();
    this.ngOnInit();
  }
}

