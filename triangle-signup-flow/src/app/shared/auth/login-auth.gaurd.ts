import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
    providedIn: 'root',
})
export class LoginAuthGuard implements CanActivate {
    constructor(private userService: UserService, private router: Router) {

    }
     canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
       if(this.userService.authUser()){
        this.router.navigateByUrl('/dashboard');
         return false;
       } else {
          
        return true;
       }
       
    }
}