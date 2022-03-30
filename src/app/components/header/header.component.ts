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
  ngOnInit(): void {
  }

  getUser(){
    this.http.get<any>("http://localhost:3000/users")
  }
  logout(): void {
    this.authService.logout();
  }


}
