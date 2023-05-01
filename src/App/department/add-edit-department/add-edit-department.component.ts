import { Component, OnInit, Input } from '@angular/core';
import { DepartmentService } from '../department.service';
import { Department } from '../department';

@Component({
  selector: 'app-add-edit-department',
  templateUrl: './add-edit-department.component.html',
  styleUrls: ['./add-edit-department.component.scss']
})
export class AddEditDepartmentComponent implements OnInit {

  constructor(private service: DepartmentService) { }

  @Input() depart: any;
  //DepartmentId = 0;
  DepartmentName = "";
  DepartmentId: number = 0;
  departmentForm: Department={
    Id:0,
    Name:'', 
  };
  ngOnInit(): void {

    this.DepartmentId = this.depart.DepartmentId;
    this.DepartmentName = this.depart.DepartmentName;
  }

  addDepartment() {
    this.departmentForm = {
      Id: this.DepartmentId,
      Name: this.DepartmentName
    };
    this.service.addDepartment(this.departmentForm).subscribe(res => {
      alert(res.toString());
    });
  }

  updateDepartment() {
    this.departmentForm = {
      Id: this.DepartmentId,
      Name: this.DepartmentName
    };
    this.service.updateDepartment(this.departmentForm).subscribe(res => {
      alert(res.toString());
    });
  }
}