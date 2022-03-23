import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private router: ActivatedRoute , private http: HttpClient) { }

  code: string = '';
  questions: Array<any> = [

  ]
  subjects: Array<any> = [

  ]
  ngOnInit(): void {
    this.router.params.subscribe(par => {
      this.code = String(par['id']);
    });

    this.http.get<any>("http://localhost:3000/"+this.code)
      .subscribe(data => {
        this.questions = data;
        console.log(this.questions)
      });
      this.http.get<any>("http://localhost:3000/subjects")
      .subscribe(data => {
        this.subjects = data;
      });
  }
  
  
}
