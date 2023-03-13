import {Component, EventEmitter, OnInit} from '@angular/core';
import {Customer} from "../../model/customer";
import {CustomerService} from "../../service/customer.service";
import * as alertify from 'alertifyjs'
import {ToastrModule, ToastrService} from "ngx-toastr";



@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  page: number = 1;
  count: number = 0;
  tableSize: number = 3;

  customer :Customer
  customers: Customer [] = [];
  constructor(private customerService:CustomerService,
              private toast :ToastrService) {
  }

  ngOnInit(): void {
    this.findAll()
  }
  findAll(){
    this.customerService.getAll().subscribe( next =>{
      console.log("list")
      this.customers = next;
      this.toast.success("list")
    })
  }

  searchText: string='';
  onSearchTextEntered(searchValue:string){
    this.searchText = searchValue;
    console.log(this.searchText);
  }

  detailInfo(item:Customer) {
    console.log('detail')
    this.customer=item;
  }

  deleteCustomer(id:number){
    alertify.confirm("Remove Customer", "do you want remove this customer?", () => {
      this.customerService.deleteCustomer(id).subscribe(r => {
        console.log("delete")
        this.ngOnInit();
      });
    }, function () {

    })
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.findAll();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.findAll();
  }
}

