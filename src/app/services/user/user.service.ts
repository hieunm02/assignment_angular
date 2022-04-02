import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  update(user:any): Observable<any>{
    return this.http.put<any>(`${environment.user_api}/${user.id}`, {...user});
  }
}
