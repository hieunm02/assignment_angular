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
  keyword: string = "";
  students: Array<any> = [

  ]
  p:number = 1;
  ngOnInit(): void {
    this.router.params.subscribe(par => {
      this.id = Number(par['id']);
    });

    this.getStudent();
  }
  getStudent(searchKeyword: string = ""){
    this.studentService.list(searchKeyword)
      .subscribe(data => {
        this.students = data;
      });
  }
  search(){
    this.getStudent(this.keyword);
  }

  remove(student: any){
    const confilm = window.confirm('Bạn có chắc muốn xóa')
    if(confilm){
    this.studentService.remove(student.id)
    .subscribe(data => {
      this.students = this.students.filter(item => item.id != student.id)
    })
  }
  }

  //sắp xếp theo mã
  key:string = 'id';
  reverse:boolean = false;
  sort(key:string = ''){
    this.key = key;
    this.reverse = !this.reverse;
  }

}
