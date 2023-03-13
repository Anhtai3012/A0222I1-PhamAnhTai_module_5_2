import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RentType} from "../model/rent-type";

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {
  url="http://localhost:3000/rentType";
  constructor(private httpClient:HttpClient) { }

  getAll():Observable<RentType[]> {
    return this.httpClient.get<RentType[]>(this.url);
  }
}
