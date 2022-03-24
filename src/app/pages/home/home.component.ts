import { SubjectService } from './../../services/subject/subject.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private subjectService: SubjectService) { }
  keyword: string = "";
  subjects: Array<any> = [

  ]
  ngOnInit(): void {
    this.getSubject();
  }
  getSubject(searchKeyword: string = ""){
    this.subjectService.list(searchKeyword)
    .subscribe(data => {
      this.subjects = data;
    });
  }
  search(){
    this.getSubject(this.keyword);
  }
 

}
