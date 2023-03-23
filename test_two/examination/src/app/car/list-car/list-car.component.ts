import { Component, OnInit } from '@angular/core';
import {CarService} from "../../service/car.service";
import {Car} from "../../model/car";
import alertify from "alertifyjs";
import {DiemDi} from "../../diem-di";
import {DiemDen} from "../../diem-den";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent implements OnInit {
  diemDi:DiemDi[] = []
  diemDen:DiemDen[]= [];
  cars :Car[] = [];
  car:Car;
  constructor(private carService:CarService,
              private toast :ToastrService) {

  }

  ngOnInit(): void {
    this.carService.getAll().subscribe((data) =>{
      this.cars = data;
    })
  }

  deleteCar(id: number) {
    this.carService.getById(id).subscribe((data) => {
      alertify.confirm("Xóa ", "ban muốn xoa chuyen xe nay với bien so "+data.bienSo+" ?", () => {
        this.carService.deleteCar(id).subscribe((next) => {
          this.ngOnInit()
        });
      }, function () {

      })
    })
  }

}
