import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Car} from "../model/car";

@Injectable({
  providedIn: 'root'
})
export class CarService {
  url="http://localhost:3000/cars";
  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.url);
  }

  deleteCar(id:number):Observable<void> {
    return this.httpClient.delete<void>(this.url+'/'+id)
  }

  editCar(car:Car):Observable<Car> {
    console.log(car.id)
    return this.httpClient.put<Car>(this.url+'/'+car.id,car)
  }

  getById(id:number):Observable<Car>{
    return  this.httpClient.get(this.url+'/'+id)
  }
}
