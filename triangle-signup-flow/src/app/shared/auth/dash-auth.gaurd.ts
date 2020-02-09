import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
    providedIn: 'root',
})
export class DashBoardAuthGuard implements CanActivate {
    constructor(private userService: UserService, private router: Router) {

    }
     canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
       if(this.userService.authUser()){
        
         return true;
       } else {
           this.router.navigateByUrl('/login');
        return false;
       }
       
    }
}