import {Component, OnChanges, OnInit, PipeTransform} from '@angular/core';
import {Contract} from "../../model/contract";
import {ContractService} from "../../service/contract.service";
import {Customer} from "../../model/customer";
import {Facility} from "../../model/facility";
import alertify from "alertifyjs";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {

  searchValue:string;

  page: number = 1;
  count: number = 0;
  tableSize: number = 3;

  contracts : Contract[]=[];
  customers :Customer [] =[];
  facilitys :Facility [] =[];
  constructor(private contractService:ContractService,
              private toast:ToastrService) { }

  ngOnInit(): void {this.findAll()}
  findAll(){
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
    this.page = event;
    this.findAll();
  }


}

