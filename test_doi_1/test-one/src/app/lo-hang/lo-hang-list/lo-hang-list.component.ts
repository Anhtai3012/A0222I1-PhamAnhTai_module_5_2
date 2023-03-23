import { Component, OnInit } from '@angular/core';
import {LoHangService} from "../../service/lo-hang.service";
import {LoHang} from "../../model/lo-hang";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-lo-hang-list',
  templateUrl: './lo-hang-list.component.html',
  styleUrls: ['./lo-hang-list.component.css']
})
export class LoHangListComponent implements OnInit {
  lohang:LoHang [] = []
  constructor(private loHangService:LoHangService,
              private toast : ToastrService) { }

  ngOnInit(): void {
    this.loHangService.getAll().subscribe((data) => {
      this.lohang = data;
      this.toast.success("list")
    })
  }

}
