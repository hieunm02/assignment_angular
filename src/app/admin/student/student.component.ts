import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  constructor(private router: ActivatedRoute, private http: HttpClient) { }

  id: number = 0;

  ngOnInit(): void {
    this.router.params.subscribe(par => {
      this.id = Number(par['id']);
    });

    this.http.get<any>("http://localhost:3000/students")
      .subscribe(data => {
        this.students = data;
        console.log(this.id);
        
      });
  }

  students: Array<any> = [

  ]

}
