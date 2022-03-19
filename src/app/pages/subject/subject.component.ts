import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor(private router: ActivatedRoute , private http: HttpClient) { }

  id: number = 0;
  ngOnInit(): void {
    this.router.params.subscribe(par => {
      this.id = Number(par['id']);
    });

    this.http.get<any>("http://localhost:3000/subjects")
      .subscribe(data => {
        this.subjects = data;
        console.log(this.id);
      });
  }
  subjects: Array<any> = [

  ]
  

}
