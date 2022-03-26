import { SubjectService } from './../../services/subject/subject.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject-admin',
  templateUrl: './subject-admin.component.html',
  styleUrls: ['./subject-admin.component.css']
})
export class SubjectAdminComponent implements OnInit {
  constructor(private router: ActivatedRoute, private subjectService: SubjectService) { }

  id: number = 0;
  keyword: string = "";

  subjects: Array<any> = [

  ]
  p: number = 1;
  
  ngOnInit(): void {
    this.router.params.subscribe(par => {
      this.id = Number(par['id']);
    });
    this.getSubject();

  }

  getSubject(searchKeyword: string = ""){
    this.subjectService.list(searchKeyword)
    .subscribe(data => {
      this.subjects = data;
      console.log(this.id);
      
    });
  }

  search(){
    this.getSubject(this.keyword);
  }

  remove(subject: any){
    const confilm = window.confirm('Bạn có chắc muốn xóa')
    if(confilm){
    this.subjectService.remove(subject.id)
    .subscribe(data => {
      this.subjects = this.subjects.filter(item => item.id != subject.id);
    })
  }
  }

  //sắp xếp theo mã
  key: string = "id";
  reverse:boolean = false;
  sort(key: string = ''){
    this.key = key;
    this.reverse = !this.reverse;
  }


}
