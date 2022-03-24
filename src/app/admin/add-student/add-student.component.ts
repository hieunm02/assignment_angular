import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  listStudents: Array<any> = [];

  studentData = {
    username: "",
    password: "",
    fullname: "",
    email: "",
    gender: "",
    birthday: "",
    schoolfee: 0,
    marks: 0,
  }

  constructor(private studentService: StudentService) { }
  ngOnInit(): void {
    this.getStudent();
  }
  getStudent(){ 
    this.studentService.list()
    .subscribe(data => {
      this.listStudents = data;
      console.log(this.listStudents);
    })
  }

  addStudent(){
    this.studentService.addNew(this.studentData)
    .subscribe(newStudent => {
      this.listStudents.push(newStudent);
    });
    setTimeout(() => {
    document.location.href = 'http://localhost:4200/admin/sinh-vien'
      
    }, 1000);
  }

}
