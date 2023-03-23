import {Time} from "@angular/common";
import {DiemDi} from "../diem-di";
import {DiemDen} from "../diem-den";

export interface Car {
  id?:number;
  bienSo?:number;
  loaiXe?:string;
  tenNhaXe?:string;
  diemDi?:DiemDi;
  diemDen?:DiemDen;
  sdt?:string;
  email?:string;
  gioDi?:Time;
  gioDen?:Time;
}
