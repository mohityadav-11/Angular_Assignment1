import { Component, OnInit } from '@angular/core';
import { IEmployee } from './IEmployee';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee: IEmployee;
  qualification: Observable<string[]>;
  experience: Observable<string[]>;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.qualification = this.dataService.getQualifications();
    this.experience = this.dataService.getExperiences();

  }

}
