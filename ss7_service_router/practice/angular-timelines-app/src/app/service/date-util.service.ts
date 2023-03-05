import { Injectable } from '@angular/core';
import {addMonths, addYears, differenceInDays, differenceInMonths, differenceInYears} from "date-fns";

@Injectable({
  providedIn: 'root'
})
export class DateUtilService {

  getDiffToNow(diff:string | number | Date) :string{
    const result:string [] =[];
    const now = new Date();
    diff = new  Date(diff);
    const years = differenceInYears(now,diff);
    if (years > 0){
      result.push(`${years} years`);
      diff = addYears(diff,years);
    }

    const months = differenceInMonths(now,diff);
    result.push(`${months} month`);
    if (months > 0){
      diff = addMonths(diff,months);
    }

    const  day = differenceInDays(now,diff);
    if(day > 0 ){
      result.push(`${day} days`);
    }
    return result.join(' ');
  }
  constructor() { }
}
