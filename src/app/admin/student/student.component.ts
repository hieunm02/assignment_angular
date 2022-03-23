import { StudentService } from './../../services/student/student.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  constructor(private router: ActivatedRoute, private studentService: StudentService) { }

  id: number = 0;

  ngOnInit(): void {
    this.router.params.subscribe(par => {
      this.id = Number(par['id']);
    });

    this.getStudent();
    
  }
  getStudent(){
    this.studentService.list()
      .subscribe(data => {
        this.students = data;
      });
  }

  students: Array<any> = [

  ]

}
