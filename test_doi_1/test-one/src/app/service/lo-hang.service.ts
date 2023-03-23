import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoHang} from "../model/lo-hang";

@Injectable({
  providedIn: 'root'
})
export class LoHangService {
  readonly url = "http://localhost:3000/lohang"
  constructor(private httpClient:HttpClient) { }

  getAll():Observable<LoHang[]> {
    return  this.httpClient.get<LoHang[]>(this.url)
  }
}
