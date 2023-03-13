import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Facility} from "../model/facility";

@Injectable({
  providedIn: 'root'
})
export class Facility4Service {
  url="http://localhost:3000/facility";
  constructor(private httpClient:HttpClient) {}

  getAll():Observable<Facility[]>{
    return this.httpClient.get<Facility[]>(this.url);
  }
}
