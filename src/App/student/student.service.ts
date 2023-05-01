import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  readonly apiUrl='https://localhost:7069/api/';
  constructor(private http: HttpClient) { }
  
  get() {
    debugger;
    return this.http.get<Student[]>(this.apiUrl+'Student');
    //return this.http.get<Student[]>(this.apiUrl+'Student/Get');
  }

  post(payload: Student) {
    return this.http.post<Student>(this.apiUrl+'Student', payload);
  }

  update(payload: Student) {
    return this.http.put<Student>(this.apiUrl+'Student', payload);
  }

  delete(studetId: number) {
    return this.http.delete(`https://localhost:7069/api/Student?id=${studetId}`);
  }
}
