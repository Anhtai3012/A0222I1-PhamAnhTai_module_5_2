import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product:any;
  id:number;
  constructor( private productService:ProductService,
               private activatedRoute:ActivatedRoute,
               private router: Router) {

    this.activatedRoute.paramMap.subscribe(next => {
      const id = next.get('id');
      console.log(id);
      this.id = parseInt(id);
      this.product = this.productService.findById( parseInt(id));
      console.log(this.product);
    });
  }

  ngOnInit(): void {
  }

  delete(){
    this.productService.deleteProduct(this.id-1)
    this.router.navigateByUrl("product/list")
  }

}
