import { SubjectService } from './../../services/subject/subject.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject-admin',
  templateUrl: './subject-admin.component.html',
  styleUrls: ['./subject-admin.component.css']
})
export class SubjectAdminComponent implements OnInit {
  constructor(private router: ActivatedRoute, private subjectService: SubjectService) { }

  id: number = 0;

  ngOnInit(): void {
    this.router.params.subscribe(par => {
      this.id = Number(par['id']);
    });
    this.getSubject();

  }

  getSubject(){
    this.subjectService.list()
    .subscribe(data => {
      this.subjects = data;
      console.log(this.id);
      
    });
  }
  subjects: Array<any> = [

  ]

}