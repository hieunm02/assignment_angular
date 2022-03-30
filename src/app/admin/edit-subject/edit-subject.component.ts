import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.css']
})
export class EditSubjectComponent implements OnInit {
  constructor(private router: ActivatedRoute, private http: HttpClient) { }
  subject: any = {
    id: "",
    Code: "",
    Name: "",
    Logo: "",
  }
  id: number = 0;
  ngOnInit(): void {
    this.router.params.subscribe(par => {
      this.id = Number(par['id']);
    });

    this.http.get<any>("http://localhost:3000/subjects/" + this.id)
      .subscribe(data => {
        this.subject = data;
        console.log(this.id);
        console.log(this.subject);
      });
  }


}
