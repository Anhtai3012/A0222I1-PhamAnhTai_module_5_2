import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCarComponent} from "./car/list-car/list-car.component";
import {CarSaveComponent} from "./car/car-save/car-save.component";


const routes: Routes = [
  {path:"",component:ListCarComponent},
  {path:"car/edit/:id",component:CarSaveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
