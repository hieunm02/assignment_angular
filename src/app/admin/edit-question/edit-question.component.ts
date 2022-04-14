import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from './../../services/user/user.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {

  constructor(private router: ActivatedRoute, private http: HttpClient, private userService : UserService,private route: Router) { }
  question: any = {
    Text: "",
  }
  id: number = 0;
  code: string = ""
  ngOnInit(): void {
    this.router.params.subscribe(par => {
      this.id = Number(par['id']);
      this.code = String(par['code']);

    });

    this.http.get<any>("http://localhost:3000/" + this.code + "/" +this.id)
      .subscribe(data => {
        this.question = data;
        console.log(this.question);
        
      });
  }

  editForm: FormGroup = new FormGroup({
    Text: new FormControl('', Validators.required),
  })

  edit(item: any){
    console.log(item);
    this.http.put<any>("http://localhost:3000/" + this.code + "/" + this.id, item)
    .subscribe(newquestion => {
      this.question.push(newquestion);
    });
    setTimeout(() => {
      this.route.navigate(['/admin/question/' +this.code]);

      
    }, 1000);
  }

}
