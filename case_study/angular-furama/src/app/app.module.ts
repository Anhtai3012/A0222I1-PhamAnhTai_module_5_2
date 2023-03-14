import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FooterComponent} from "./footer/footer.component";
import { HeaderComponent } from './header/header.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { ContractListComponent } from './contract/contract-list/contract-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SearchComponent } from './search/search.component';
// import { SaveFacilityComponent } from './contract/save-contract/save-facility.component';
import { FacilityListComponent } from './facility/facility-list/facility-list.component';
import { CustomerSaveComponent } from './customer/customer-save/customer-save.component';
import {RouterModule} from "@angular/router";
import { EmployeeList4Component } from './employee/employee-list4/employee-list4.component';
import { EmployeeSaveComponent } from './employee/employee-save/employee-save.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgxPaginationModule} from "ngx-pagination";
import { SaveContractComponent } from './contract/save-contract/save-contract.component';
import {SaveFacilityComponent} from "./facility/save-facility/save-facility.component";
import {NgSearchPipe} from "ng-search-pipe";
import { SearchFilterPipe } from './search-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    CustomerListComponent,
    ContractListComponent,
    SearchComponent,
    SaveFacilityComponent,
    FacilityListComponent,
    CustomerSaveComponent,
    EmployeeList4Component,
    EmployeeSaveComponent,
    SaveContractComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
      NgxPaginationModule,
    NgSearchPipe
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports :[]
})
export class AppModule {
}
