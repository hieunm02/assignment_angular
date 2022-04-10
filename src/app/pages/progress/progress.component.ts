import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  constructor() { }

  user: any
  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    const test:string|any = localStorage.getItem('login_user') ;
    this.user= JSON.parse(test).marks;
    console.log(this.user);
    
  }

}
