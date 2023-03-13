import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CustomerListComponent} from "./customer/customer-list/customer-list.component";
import {ContractListComponent} from "./contract/contract-list/contract-list.component";
import {FacilityListComponent} from "./facility/facility-list/facility-list.component";
import {EmployeeList4Component} from "./employee/employee-list4/employee-list4.component";
import {CustomerSaveComponent} from "./customer/customer-save/customer-save.component";
import {EmployeeSaveComponent} from "./employee/employee-save/employee-save.component";
import {SaveFacilityComponent} from "./facility/save-facility/save-facility.component";


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'customer-list',component:CustomerListComponent},
  {path:'contract-list',component:ContractListComponent},
  {path:'facility-list',component:FacilityListComponent},
  {path:'employee-list',component:EmployeeList4Component},
  {path:'customer/create',component:CustomerSaveComponent},
  {path:'customer/edit/:id',component:CustomerSaveComponent},
  {path:'employee/create',component:EmployeeSaveComponent},
  {path:'employee/edit/:id',component:EmployeeSaveComponent},
  {path:'facility/create',component:SaveFacilityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
