import {SanPham} from "./san-pham";

export interface LoHang {
  id?:number;
  code?:string;
  product?:SanPham;
  quantity?:number;
  startDay?:Date;
  productionDay?:Date;
  endDay?:Date;
}
