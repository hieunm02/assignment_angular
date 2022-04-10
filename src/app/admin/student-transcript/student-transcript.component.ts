import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-transcript',
  templateUrl: './student-transcript.component.html',
  styleUrls: ['./student-transcript.component.css']
})
export class StudentTranscriptComponent implements OnInit {

  constructor(private http: HttpClient, private router: ActivatedRoute) { }
  student: Array<any> = [

  ]
  id: number = 0

  ngOnInit(): void {
    this.router.params.subscribe(par => {
      this.id = Number(par['id']);
    });
    this.getScore();
  }

  getScore(){
    this.http.get<any>("http://localhost:3000/users")
    .subscribe(data => {
      this.student = data;
      console.log(this.student);
    })
  }

}
