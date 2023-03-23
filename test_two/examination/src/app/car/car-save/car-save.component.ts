import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {CarService} from "../../service/car.service";
import {Car} from "../../model/car";
import {Time} from "@angular/common";

@Component({
  selector: 'app-car-save',
  templateUrl: './car-save.component.html',
  styleUrls: ['./car-save.component.css']
})
export class CarSaveComponent implements OnInit {
  formCar:FormGroup;
  car :Car;
  constructor( private carService:CarService,
               private router:Router,
               private activatedRoute:ActivatedRoute,
               private builder:FormBuilder,
               private toast :ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( (next) =>{
      console.log(next)
      const id = +next.get("id")
      this.carService.getById(id).subscribe((data) =>{
        this.car = data
        this.fromBuilder()
      })
    })
  }

  fromBuilder(){
    this.formCar = this.builder.group( {
      id: this.builder.control( this.car.id),
      bienSo: this.builder.control(this.car.bienSo,[Validators.required,Validators.min(1000),Validators.max(59999)]),
      loaiXe: this.builder.control(this.car.loaiXe,[Validators.required,Validators.minLength(4)]),
      tenNhaXe: this.builder.control(this.car.tenNhaXe,[Validators.required,Validators.minLength(4)]),
      diemDi: this.builder.control(this.car.diemDi,[Validators.required,Validators.minLength(4)]),
      diemDen: this.builder.control(this.car.diemDen,[Validators.required,Validators.minLength(4)]),
      sdt: this.builder.control(this.car.sdt,[Validators.required,Validators.pattern('^09[0,3,7][0-9]{7}$')]),
      email: this.builder.control(this.car.email,[Validators.required,Validators.email]),
      gioDi: this.builder.control(this.car.gioDi,[Validators.required]),
      gioDen: this.builder.control(this.car.gioDen,[Validators.required])
    })
  }

  submitCar() {
    if (this.formCar.valid){
      this.carService.editCar(this.formCar.value).subscribe( (data) =>{
        this.router.navigateByUrl("").then(result =>{
          this.toast.success("chỉnh sửa thành công")
        })
      })
    } else this.toast.error("Lỗi")
  }
}
