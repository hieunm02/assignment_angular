import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  constructor(private router: ActivatedRoute, private http: HttpClient) { }

  id: number = 0;
  code: string = '';
  answers: Array<any> = [

  ]
  ngOnInit(): void {
    this.router.params.subscribe(par => {
      this.id = Number(par['id']);
      this.code = String(par['code']);
    });

    this.getAnswer();

  }

  getAnswer(){
    this.http.get<any>("http://localhost:3000/"+ this.code + "/" + this.id)
    .subscribe(data => {
      this.answers = data;
      console.log(this.answers);
    });
  }
}
