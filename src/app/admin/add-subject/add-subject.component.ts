import { SubjectService } from './../../services/subject/subject.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {

  listSubject: Array<any> = [];

  subjectData = {
    Code: "",
    Name: "",
    Logo: "",
  }
  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.getSubject();
  }

  getSubject(){
    this.subjectService.list()
    .subscribe(data => {
      this.listSubject = data
      console.log(this.listSubject);
      
    })
  }

  addSubject(){
    this.subjectService.addNew(this.subjectData)
    .subscribe(newsubject => {
      this.listSubject.push(newsubject);
    });
    setTimeout(() => {
      document.location.href = 'http://localhost:4200/admin/mon-hoc';
    }, 1000);
  }
}
