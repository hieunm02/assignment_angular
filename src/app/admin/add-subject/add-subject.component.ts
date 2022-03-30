import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SubjectService } from '../../services/subject/subject.service';
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
  
  addForm: FormGroup = new FormGroup({
    Code: new FormControl('', Validators.required),
    Name: new FormControl('', Validators.required),
    Logo: new FormControl('', Validators.required),

  })
  constructor(private subjectService: SubjectService, private router: Router) { }

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
      this.router.navigate(['/admin/mon-hoc']);

    }, 1000);
  }
}
