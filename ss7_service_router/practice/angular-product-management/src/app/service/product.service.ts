import { Injectable } from '@angular/core';
import {Product} from '../model/product';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product: Product;
  productS: Product [] = [{
    id: 1,
    name: 'IPhone 12',
    price: 2400000,
    description: 'New'
  }, {
    id: 2,
    name: 'IPhone 11',
    price: 1560000,
    description: 'Like new'
  }, {
    id: 3,
    name: 'IPhone X',
    price: 968000,
    description: '97%'
  }, {
    id: 4,
    name: 'IPhone 8',
    price: 7540000,
    description: '98%'
  }, {
    id: 5,
    name: 'IPhone 11 Pro',
    price: 1895000,
    description: 'Like new'
  }];
  getAll() {
    return this.productS;
  }

  saveProduct(product) {
    this.productS.push(product);
  }

  findById(id: number) {
    return  this.productS.find(item => item.id === id);
  }
  updateProductById(id: number , updateItem: any){
    const  index = this.productS.findIndex(item => item.id = id);
    if (index !== -1){
      this.productS[index] = updateItem;
    }
  }
  deleteProduct(id: number){
    this.productS.splice(id,1);
  }

  constructor() { }

}
