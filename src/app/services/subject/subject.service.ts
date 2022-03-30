import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }
  list(searchKeyword :string = ""): Observable<any>{
    return this.http.get<any>(`${environment.subject_api}?Name_like=${searchKeyword}`)
  };
  addNew(data: any): Observable<any>{
    return this.http.post<any>(environment.subject_api, {...data});
  };
  remove(id: any): Observable<any>{
    return this.http.delete<any>(`${environment.subject_api}/` + id);
  }
}
