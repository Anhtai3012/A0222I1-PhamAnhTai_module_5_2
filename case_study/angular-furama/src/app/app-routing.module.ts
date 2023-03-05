import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CustomerListComponent} from "./customer/customer-list/customer-list.component";
import {ContractListComponent} from "./contract/contract-list/contract-list.component";
import {FacilityListComponent} from "./facility/facility-list/facility-list.component";
import {EmployeeList4Component} from "./employee/employee-list4/employee-list4.component";


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'customer-list',component:CustomerListComponent},
  {path:'contract-list',component:ContractListComponent},
  {path:'facility-list',component:FacilityListComponent},
  {path:'employee-list',component:EmployeeList4Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
