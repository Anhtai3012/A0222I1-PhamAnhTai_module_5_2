import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loops:number[][] =[[1,2,3],[2,3,1],[3,1,2]]
  constructor() { }

  ngOnInit(): void {

  }


  goToTop() {
    window.scroll(0,0);
  }
}
