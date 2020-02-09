import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { LoginModel } from 'src/app/shared/models/login.model';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginModel:LoginModel = new LoginModel();

  constructor(private fb: FormBuilder,private userService:UserService,private route:Router,private snackBar:MatSnackBar) { 
    this.initForm();
  }
  initForm() {
    this.loginForm = this.fb.group({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    localStorage.setItem('currentUser','null');
  }

onSubmit(){
  if(this.loginForm.valid){
    this.loginModel.setPassword = this.getPassword.value;
    this.loginModel.setUserNameEmail= this.getUserName.value;
    this.userService.loginUser(this.loginModel)
    .subscribe((x:any) => this.navigateToDashboard(x),
    (error:any) => console.log(error),
    () => console.log(''));
  }
}
navigateToDashboard(res:string){
  if(res!==null){
    this.route.navigateByUrl('/dashboard');
  } else {
    this.snackBar.open('Invalid username or password','Error',{
      duration: 3000
    });
  }
}
  get getUserName():AbstractControl{
    return this.loginForm.get('userName');
  }
  get getPassword():AbstractControl{
    return this.loginForm.get('password');
  }

}
