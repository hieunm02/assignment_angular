import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private router: ActivatedRoute, private http: HttpClient) { }

  code: string = '';
  questions: Array<any> = [

  ]

  subjects: Array<any> = [

  ]

  ngOnInit(): void {

    this.router.params.subscribe(par => {
      this.code = String(par['id']);
    });

    this.getQuestion();


    this.http.get<any>("http://localhost:3000/subjects")
      .subscribe(data => {
        this.subjects = data;
      });


  }
  getQuestion(_limit: number = 10) {
    this.http.get<any>("http://localhost:3000/" + this.code)
      .subscribe(data => {
        var arr = data;
        for (let i = 1; i <= 10; i++) {
          var randArr = arr[Math.floor(Math.random() * arr.length)];
          this.questions.push(randArr);
        }
      });
  }

  // answerAll(): boolean {
  //   return this.answer && !this.answer.includes(0);
  // }




}
