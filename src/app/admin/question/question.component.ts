import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(private router: ActivatedRoute, private http: HttpClient) { }

  code: string = '';
  questions: Array<any> = [

  ]
  ngOnInit(): void {
    this.router.params.subscribe(par => {
      this.code = String(par['id']);
    });
    this.getQuestion();

  }

  getQuestion(){
    this.http.get<any>("http://localhost:3000/" + this.code)
    .subscribe(data => {
      this.questions = data;
      console.log(this.questions);
      
    });
  }

}
