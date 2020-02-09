import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { LoginModel } from '../models/login.model';
import { LanguageModel } from '../models/language-pref.model';
@Injectable({
    providedIn: 'root',
  })
export class UserService {

    
   public languagePrefSubject = new BehaviorSubject<LanguageModel>(new LanguageModel());
    constructor() {
        this.checkOrCreateUsersData();
    }

    saveUser<T>(userModel: UserModel): Observable<UserModel> {

        let observable = Observable.create((observer: any) => {
            try {
                if (this.checkEmailIdExists(userModel.email)) {
                    observer.error('Email Id Exists');
                } else {
                    this.createUser(userModel);
                    observer.next(200)
                }
            } catch (err) {
                observer.error(err);

            }
        });
        return observable;
    }

    loginUser(loginModel: LoginModel): Observable<UserModel> {
        const users = this.convertUsersFromLocalStorage();
        let observable = Observable
            .create((observer: any) => {
                try {
                    const user = this.findUser(loginModel, users);
                    if (user) {
                        observer.next(user);
                    } else {
                        observer.next(null);
                    }
                    observer.complete();
                } catch (err) {
                    observer.error(err);

                }

            });
        return observable;
    }


    authUser(): UserModel {
        
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if(currentUser!==null){
            return new UserModel().deserialize(currentUser);
        } else {
            return null;
        }
       
    }















    private convertUsersFromLocalStorage(): UserModel[] {
        const users = JSON.parse(localStorage.getItem('usersData')) as Array<any>;
        let usersModel = [];
        for (let i = 0; i < users.length; i++) {
            usersModel.push(new UserModel().deserialize(users[i]));
        }
        return usersModel;

    }
    private checkOrCreateUsersData(): void {
        const exists = Array.isArray(localStorage.getItem('usersData'));
        if (!Array.isArray(exists)) {
            localStorage.setItem('usersData', '[]');
        }
    }
    private createUser(userModel: UserModel) {
        const usersModel = this.convertUsersFromLocalStorage();
        usersModel.push(userModel);
        localStorage.setItem('usersData', JSON.stringify(usersModel));
        localStorage.setItem('currentUser', JSON.stringify(userModel));
    }
    private checkEmailIdExists(email: string) {
        let usermodels = this.convertUsersFromLocalStorage();
        let found = false;
        for (let i = 0; i < usermodels.length; i++) {
            if (usermodels[i].email === email) {

                found = true;

            }
        }
        return found;
    }
    private checkUserIdExists(email: string) {
        let usermodels = this.convertUsersFromLocalStorage();
        let found = false;
        for (let i = 0; i < usermodels.length; i++) {
            if (usermodels[i].userName === email) {

                found = true;

            }
        }
        return found;
    }

    private findUser(loginModel: LoginModel, usermodels: UserModel[]): UserModel | null {
        let user = null;
        for (let i = 0; i < usermodels.length; i++) {
            if (usermodels[i].userName === loginModel.getUserNameEmail || usermodels[i].email === loginModel.getUserNameEmail) {
                if (usermodels[i].password === loginModel.getPassword) {
                    localStorage.setItem('currentUser', JSON.stringify(usermodels[i]));
                    user = usermodels[i];
                }
            }
        }
        return user;
    }
}