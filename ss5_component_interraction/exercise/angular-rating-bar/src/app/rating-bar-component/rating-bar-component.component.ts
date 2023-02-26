import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-rating-bar-component',
  templateUrl: './rating-bar-component.component.html',
  styleUrls: ['./rating-bar-component.component.css']
})
export class RatingBarComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ratingNumber:number;

  ratingControl = new FormControl(0)

  getRating() {
    this.ratingNumber = this.ratingControl.value
  }
}
