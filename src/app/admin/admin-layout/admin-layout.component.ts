import { AuthServiceService } from './../../services/auth/auth-service.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
  constructor(private router: ActivatedRoute, private http: HttpClient, private authService:AuthServiceService) { }
  
  students: Array<any> = [

  ]
  id: number = 0;

  user: any;
  ngOnInit(): void {
    this.router.params.subscribe(par => {
      this.id = Number(par['id']);
    });

    this.http.get<any>("http://localhost:3000/students/"+this.id)
      .subscribe(data => {
        this.students = data;
        console.log(this.id);
        
      });
      this.getUser();
  }
  getUser(){
    const test:string|any = localStorage.getItem('login_user') ;
    this.user= JSON.parse(test).name;
    console.log(this.user);
    
  }
  logout(): void {
    this.authService.logout();
  }


}
