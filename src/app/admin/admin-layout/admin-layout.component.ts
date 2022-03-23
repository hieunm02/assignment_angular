import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
  constructor(private router: ActivatedRoute, private http: HttpClient) { }

  id: number = 0;

  ngOnInit(): void {
    this.router.params.subscribe(par => {
      this.id = Number(par['id']);
    });

    this.http.get<any>("http://localhost:3000/students/"+this.id)
      .subscribe(data => {
        this.students = data;
        console.log(this.id);
        
      });
  }

  students: Array<any> = [

  ]

}
