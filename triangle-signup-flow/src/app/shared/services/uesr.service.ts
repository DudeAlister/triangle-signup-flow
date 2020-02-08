import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/login.model';
@Injectable()
export class UserService {
    constructor() {
        this.checkOrCreateUsersData();
        let us = new UserModel();
        us.userName="sasi";
        us.password='1';
    localStorage.setItem('usersData',JSON.stringify([us]));
    }

    saveUser<T>(userModel: UserModel): Observable<UserModel> {

        const users = localStorage.getItem('usersData');
        let observable = Observable.create((observer: any) => {
            try {
                if (this.checkEmailIdExists(userModel.email)) {
                    observer.error('Email Id Exists');
                } else {
                    this.createUser(userModel);
                    observer.next('User Created Successfully')
                }
            } catch (err) {
                observer.error(err);

            }
        });
        return observable;
    }

    loginUser(loginModel: LoginModel):Observable<UserModel> {
        const users = this.convertUsersFromLocalStorage();
        let observable = Observable
            .create((observer: any) => {
                try{
                    const user =  this.findUser(loginModel,users);
                     if(user){
                         observer.next(user);
                     } else{
                         observer.next(null);
                     }
                     observer.complete();
                }catch(err){
                    observer.error(err);
                    
                }

            });
            return observable;
    }

   
















 private convertUsersFromLocalStorage():UserModel[]{
     const users = JSON.parse(localStorage.getItem('usersData')) as Array<any>;
     let usersModel=[];
     for(let i =0;i<users.length;i++){
        usersModel.push(new UserModel().deserialize(users[i])) ;
     }
     return usersModel;

 }
    private checkOrCreateUsersData(): void {
        const exists = localStorage.getItem('usersData');
        if (!exists) {
            localStorage.setItem('usersData', '[]');
        }
    }
    private createUser(userModel: UserModel) {
        const usersModel = this.convertUsersFromLocalStorage().push(userModel)
        return localStorage.setItem('usersData', JSON.stringify(userModel));
    }
    private checkEmailIdExists(email: string) {
       let usermodels = this.convertUsersFromLocalStorage();
       let found = false;
       for (let i = 0; i < usermodels.length; i++) {
        if (usermodels[i].email === email) {
           
              found =true;
       
        }
    }
        return found;
    }
    private checkUserIdExists(email: string) {
        let usermodels = this.convertUsersFromLocalStorage();
        let found = false;
        for (let i = 0; i < usermodels.length; i++) {
         if (usermodels[i].userName === email) {
            
               found =true;
        
         }
     }
         return found;
     }
    
    private findUser(loginModel: LoginModel, usermodels: UserModel[]): UserModel | null {
        let user = null;
        for (let i = 0; i < usermodels.length; i++) {
            if (usermodels[i].userName === loginModel.getUserNameEmail || usermodels[i].email === loginModel.getUserNameEmail) {
                if (usermodels[i].password === loginModel.getPassword) {
                    user = usermodels[i];
                }
            }
        }
        return user;
    }
}