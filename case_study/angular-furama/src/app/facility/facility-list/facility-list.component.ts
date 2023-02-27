import { Component, OnInit } from '@angular/core';
import {Facility} from "../../model/facility";

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  facilitys: Facility [] = [
    {id:1,name:'102',cost:3500,description:'normal',poolArea:20,status:true,floor:5},
    {id:2,name:'103',cost:3500,description:'normal',poolArea:20,status:true,floor:5},
    {id:3,name:'104',cost:3500,description:'normal',poolArea:20,status:true,floor:5},
    {id:4,name:'105',cost:3500,description:'normal',poolArea:20,status:true,floor:5},
    {id:5,name:'106',cost:3500,description:'normal',poolArea:20,status:true,floor:5},
  ];

}
