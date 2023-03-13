import { Injectable } from '@angular/core';
import {EducationEmployee} from "../model/education-employee";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EducationEmployeeService {
  educations:EducationEmployee[]=[];
  constructor(private httpClient:HttpClient) {
    // this.educations.push({id: 1,name: 'Trung cấp'})
    // this.educations.push({id: 2,name: 'Cao đẳng'})
    // this.educations.push({id: 3,name: 'Đại học'})
    // this.educations.push({id: 4,name: 'Sau đại học'})
  }

  getAll():Observable<EducationEmployee[]>{
    return this.httpClient.get<EducationEmployee[]>("http://localhost:3000/education/");
  }
}
