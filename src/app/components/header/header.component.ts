import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from './../../services/auth/auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthServiceService, private http: HttpClient) { }

  nameUser: string = "";

  user: any
  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    const name:string|any = localStorage.getItem('login_user') ;
    this.user= JSON.parse(name).name;
    console.log(this.user);
  }

  logout(): void {
    this.authService.logout();
  }


}
