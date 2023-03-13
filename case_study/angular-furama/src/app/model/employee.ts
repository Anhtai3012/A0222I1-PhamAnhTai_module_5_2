import {PositionEmployee} from "./position-employee";
import {EducationEmployee} from "./education-employee";

export interface Employee {
  id?:number;
  fullName?:string;
  dateOfBirth?:Date;
  code?:number;
  numberPhone?:string;
  email?:string;
  certificate?:EducationEmployee;
  place?:PositionEmployee;
  salary?:number;
}
