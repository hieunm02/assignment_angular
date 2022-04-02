import { UserService } from './../../services/user/user.service';
import { AuthServiceService } from './../../services/auth/auth-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private router: ActivatedRoute, private http: HttpClient,private authService: AuthServiceService, private userService: UserService) { }

  user_select_answer: Array<any> = [];
  code: string = '';
  questions: Array<any> = [

  ]

  subjects: Array<any> = [

  ]


  public answers: number[] = [];
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


  getQuestion() {
    this.http.get<any>("http://localhost:3000/" + this.code)
      .subscribe(data => {
        var arr = data;
        let randomArr = this.getDistinctNumberArr(10, data.length);
        this.questions = randomArr.map((ind) => data[ind]);
      });
  }

  private getDistinctNumberArr(amount = 10, max = 80){
    let arr: Array<number> = [];
    while(arr.length < amount){
      const rand = Math.floor(Math.random() * max);
      if(!arr.includes(rand)){
        arr.push(rand);
      }
    }
    return arr;
  }

  selectAnswer(qId: number, aId: number){
    let indx = -1;
    this.user_select_answer.forEach((el, index) => {
      if(el.qId == qId){
        indx = index
        return;
      }
    });
    if(indx == -1){
      this.user_select_answer.push({
        qId, aId
      });
    }else{
        this.user_select_answer[indx].aId = aId;
      }
console.log(this.user_select_answer);

  }


  submitExcercise(){
    const confirm = window.confirm("Bạn có chắc muốn nộp bài !");
    if(confirm){
    let correctAns = 0;
    this.user_select_answer.forEach((el) => {
      let q = this.questions.find(item => item.Id == el.qId);
      if(q.AnswerId == el.aId){
        correctAns ++;
      }
    })
    const score = (correctAns*10/this.questions.length).toFixed(2);
    let user = this.authService.loggedInUser.value;
    //user mark
    let indx = -1;
    user.marks.forEach((m:any, i:number)=>{
      if(m.subject == this.code){
        indx = i;
        return;
      }
    })
    if(indx == -1){
      user.marks.push({
        subject:this.code,
        score: Number(score)
      });
    }else{
      user.marks[indx].score = score;
    }
    this.userService.update(user)
    .subscribe(u => {
      console.log(u);
      
    })
  }
  }

  // answerAll(): boolean {
  //   return this.answer && !this.answer.includes(0);
  // }




}
