import { Injectable } from '@angular/core';
import {Student} from '../model/student';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = [];
  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Student[]> {
    return this.httpClient.get<Student[]>("http://localhost:3000/students/");

  }

  addStudent(event: any): Observable<any> {
    return this.httpClient.post("http://localhost:3000/students", event);
  }

  findById(id: number): Observable<Student> {
    return this.httpClient.get<Student>("http://localhost:3000/students/"+id);
  }
}
