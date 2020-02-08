import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { LoginModel } from 'src/app/shared/models/login.model';
import { UserService } from 'src/app/shared/services/uesr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginModel:LoginModel = new LoginModel();

  constructor(private fb: FormBuilder,private userService:UserService,private route:Router) { 
    this.initForm();
  }
  initForm() {
    this.loginForm = this.fb.group({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
  }

onSubmit(){
  if(this.loginForm.valid){
    this.loginModel.setPassword = this.getPassword.value;
    this.loginModel.setUserNameEmail= this.getUserName.value;
    this.userService.loginUser(this.loginModel)
    .subscribe((x:any) => this.route.navigateByUrl('/dashboard'),
    (error:any) => console.log(error),
    () => console.log(''));
  }
}
  get getUserName():AbstractControl{
    return this.loginForm.get('userName');
  }
  get getPassword():AbstractControl{
    return this.loginForm.get('password');
  }

}
