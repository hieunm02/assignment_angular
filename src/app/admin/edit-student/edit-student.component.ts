import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  constructor(private router: ActivatedRoute, private http: HttpClient) { }
  student: any = {
    birthday: "",
    email: "",
    fullname: "",
    gender: "",
    id: "",
    marks: "",
    password: "",
    schoolfee: "",
    username: ""
  }
  id: number = 0;
  ngOnInit(): void {
    this.router.params.subscribe(par => {
      this.id = Number(par['id']);

    });

    this.http.get<any>("http://localhost:3000/students/"+this.id)
      .subscribe(data => {
        this.student = data;
        console.log(this.id);
        console.log(this.student);
      });
  }

  edit(item: any){
    this.student = {...item}
  }
  

}
