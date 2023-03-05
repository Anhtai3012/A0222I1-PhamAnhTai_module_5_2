import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';





@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  productEdit: any;
  constructor(
      private productService: ProductService,
      private activatedRoute: ActivatedRoute,
      private router: Router
    ) {
    this.activatedRoute.paramMap.subscribe(next => {
       const id = next.get('id');
       console.log(id);
       this.productEdit = this.productService.findById( parseInt(id));
       console.log(this.productEdit);
    });
  }

  ngOnInit(): void {}

  update() {
    console.log(this.router.navigate(['/product/edit',this.productEdit.id]));
    this.router.navigate(['/product/edit',this.productEdit.id]);
  }
}
