import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentService } from './../../services/student/student.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  listQuestions: any[] = [];

  newAnswer: Array<any> = []
  questionData: any = 
    {
      "Text": "",
      "Marks": 1,
      "AnswerId": 0,
      "Answers":
        [
          {
            "id": 0,
            "Text": ""
          }
        ]
    }
  

  code: string = "";
  addForm: FormGroup = new FormGroup({
    Text: new FormControl('', Validators.required),
  })

  constructor(private http: HttpClient, private router: Router, private rou: ActivatedRoute) { }
  ngOnInit(): void {
    this.rou.params.subscribe(par => {
      this.code = String(par['id']);
    });
  }

  addQuestion() {
    this.http.post<any>("http://localhost:3000/" + this.code, { ...this.questionData })
      .subscribe(newQuestion => {
        this.listQuestions.push(newQuestion);
        console.log(this.questionData);

      });
    setTimeout(() => {
      this.router.navigate(['admin/question/' + this.code]);


    }, 1000);
  }


  public addAnswer(): void {
    this.newAnswer.push({ value: "" })
  }
  public removeAnswer(i: any): void {
    this.newAnswer.splice(i, 1)
  }

}
