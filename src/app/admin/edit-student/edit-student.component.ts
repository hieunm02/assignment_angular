import { UserService } from './../../services/user/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  constructor(private router: ActivatedRoute, private http: HttpClient, private userService : UserService,private route: Router) { }
  student: any = {
    birthday: "",
    email: "",
    name: "",
    id: "",
    marks: "",
    password: "",
  }
  id: number = 0;
  ngOnInit(): void {
    this.router.params.subscribe(par => {
      this.id = Number(par['id']);

    });

    this.http.get<any>("http://localhost:3000/users/"+this.id)
      .subscribe(data => {
        this.student = data;
        console.log(this.student);
        
      });
  }

  editForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    id: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    birthday: new FormControl('', Validators.required)
  })

  edit(item: any){
    console.log(item);
    this.userService.update(item)
    .subscribe(newStudent => {
      this.student.push(newStudent);
    });
    setTimeout(() => {
      this.route.navigate(['/admin/sinh-vien']);

      
    }, 1000);
  }
  

}
