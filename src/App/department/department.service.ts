import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Department } from './department';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  readonly apiUrl='http://localhost:5268/';

  constructor(private http : HttpClient) { }

   //department
   getDepartmentList(){
    return this.http.get<Department[]>(this.apiUrl+'department');
  }

  addDepartment(dept: Department) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Department>(this.apiUrl + 'department', dept, httpOptions);
  }

  updateDepartment(dept: Department){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<Department>(this.apiUrl + 'department', dept, httpOptions);
  }

  deleteDepartment(deptId: number) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<number>(this.apiUrl + 'department' + deptId, httpOptions);
  }
}
