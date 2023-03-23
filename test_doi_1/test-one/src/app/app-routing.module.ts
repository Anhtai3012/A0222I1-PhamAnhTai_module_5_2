import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoHangListComponent} from "./lo-hang/lo-hang-list/lo-hang-list.component";
import {LoHangSaveComponent} from "./lo-hang/lo-hang-save/lo-hang-save.component";


const routes: Routes = [
  {path:"",component:LoHangListComponent},
  {path:"lohang/create",component:LoHangSaveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
