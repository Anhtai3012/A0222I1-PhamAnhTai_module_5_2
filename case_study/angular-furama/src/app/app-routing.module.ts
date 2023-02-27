import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CustomerListComponent} from "./customer/customer-list/customer-list.component";
import {ContractListComponent} from "./contract/contract-list/contract-list.component";
import {FacilityListComponent} from "./facility/facility-list/facility-list.component";


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'customer-list',component:CustomerListComponent},
  {path:'contract-list',component:ContractListComponent},
  {path:'facility-list',component:FacilityListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
