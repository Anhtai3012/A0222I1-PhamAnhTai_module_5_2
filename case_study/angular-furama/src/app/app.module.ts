import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FooterComponent} from "./footer/footer.component";
import { HeaderComponent } from './header/header.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { ContractListComponent } from './contract/contract-list/contract-list.component';
import {FormsModule} from "@angular/forms";
import { SearchComponent } from './search/search.component';
import { SaveFacilityComponent } from './contract/save-contract/save-facility.component';
import { FacilityListComponent } from './facility/facility-list/facility-list.component';

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
    FacilityListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
