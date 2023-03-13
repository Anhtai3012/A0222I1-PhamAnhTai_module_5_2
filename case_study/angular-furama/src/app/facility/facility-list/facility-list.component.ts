import { Component, OnInit } from '@angular/core';
import {Facility} from "../../model/facility";
import {Facility4Service} from "../../service/facility4.service";
import {RentType} from "../../model/rent-type";
import {FacilityType} from "../../model/facility-type";
import {RentTypeService} from "../../service/rent-type.service";
import {FacilityTypeService} from "../../service/facility-type.service";

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilitys: Facility [] = [];
  // rentTypes:RentType [] = [];
  facilityTypes:FacilityType []=[];
  constructor(private facility4Service:Facility4Service,
              private rentTypeService:RentTypeService,
              private facilityTypeService:FacilityTypeService,
              ) { }

  ngOnInit(): void {
    this.facilityTypes = this.facilityTypeService.getALl();
    this.facility4Service.getAll().subscribe(data => {
      this.facilitys = data
    })
  }

}
