import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { UserModel } from '../models/user.model';

describe('UserService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should create object of UserService', () => {
        const service: UserService = TestBed.get(UserService);
        expect(service).toBeTruthy();
    });
    it('should create User', () => {
        const service: UserService = TestBed.get(UserService);
        const userModel = new UserModel();
        userModel.userName = "andrew";
        userModel.password = "test@123";
        userModel.displayName = "andrew";
        userModel.firstName = "andrew";
        service.saveUser(userModel).subscribe(x =>{
            expect(x).toBeTruthy();
        });
    });
});