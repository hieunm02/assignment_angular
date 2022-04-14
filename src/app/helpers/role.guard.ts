import { AuthServiceService } from './../services/auth/auth-service.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  user: any

  constructor(public auth: AuthServiceService, public router: Router) { }
  canActivate() {
    const Role:string|any = localStorage.getItem("login_user");
    this.user = JSON.parse(Role).roles;
    console.log(this.user);
    if (this.user == "admin") {
      return true;
    }
    // localStorage.removeItem('login_user');
    this.router.navigate(['/']);
    return false;
  }

}
