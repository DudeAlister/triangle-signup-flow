import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { urlValidator, nameValidator, passwordValidator, MultiFieldsErrorMatcher } from 'src/app/shared/directives/validators.directive';
import { UserModel } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/uesr.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-create-access',
  templateUrl: './create-access.component.html',
  styleUrls: ['./create-access.component.css']
})
export class CreateAccessComponent implements OnInit {

  userDetailsForm: FormGroup;
  userModel = new UserModel();
  multiFieldsErrorMatcher: MultiFieldsErrorMatcher = new MultiFieldsErrorMatcher();


  constructor(private fb: FormBuilder,private userService:UserService,private route:Router,private snackBar:MatSnackBar,private translate:TranslateService) { }

  initializeForm(): FormGroup {
    return this.fb.group({
      userName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormGroup({
        password: new FormControl('', [Validators.required]),
        confirmPass: new FormControl('',[])
      }, { validators: [passwordValidator] })
      ,
      displayName: new FormControl('', [Validators.required]),
      nickName: new FormControl('', []),
      firstName: new FormControl('', [Validators.required, nameValidator]),
      lastName: new FormControl('', [Validators.required, nameValidator]),
      web: new FormControl('', [urlValidator]),
      bio: new FormControl('', [Validators.maxLength(50)]),
      jabber: new FormControl('', []),
      aolIm: new FormControl('', []),
      yahooIm: new FormControl('', [])
    })
  }




  ngOnInit() {
    this.userDetailsForm = this.initializeForm();
    this.userService.languagePrefSubject.subscribe(x=> this.translate.setDefaultLang(x.selectedLanguage));

  }
  onSubmit(){
    if(this.userDetailsForm.valid){
      this.userModel.userName = this.userName.value;
      this.userModel.email = this.email.value;
      this.userModel.password = this.password.value;
      this.userModel.displayName = this.displayName.value;
      this.userModel.nickName = this.nickName.value;
      this.userModel.firstName = this.firstName.value;
      this.userModel.lastName = this.lastName.value;
      this.userModel.website = this.web.value;
      this.userModel.bio =this.bio.value;
      this.userModel.jabber=this.jabber.value;
      this.userModel.aolIm = this.aolIm.value;
      this.userModel.yahooIm=this.yahooIm.value;
      this.userService.saveUser(this.userModel).subscribe((x:any) => this.navigateToDashBoard(x),
      (error:any) => console.log(error),
      () => console.log(''))

    }
  }
  navigateToDashBoard(res:any){
    if(res===200){
      this.route.navigateByUrl('/dashboard')
    } else {
      this.snackBar.open('Message archived', 'Undo', {
        duration: 3000
      });
    }
  }
  get userName(): any {
    return this.userDetailsForm.get('userName');
  }
  get email(): any {
    return this.userDetailsForm.get('email');
  }
  get pass(){
    return this.userDetailsForm.get('pass');
  }
  get password(): any {
    return this.userDetailsForm.get('pass').get('password');
  }
  get confirmPass(): any {
    return this.userDetailsForm.get('pass').get('confirmPass');
  }
  get displayName(): any {
    return this.userDetailsForm.get('displayName');
  }
  get nickName(): any {
    return this.userDetailsForm.get('nickName');
  }
  get firstName(): any {
    return this.userDetailsForm.get('firstName');
  }
  get lastName(): any {
    return this.userDetailsForm.get('lastName');
  }
  get web(): any {
    return this.userDetailsForm.get('web');
  }
  get jabber(): any {
    return this.userDetailsForm.get('jabber');
  }
  get aolIm(): any {
    return this.userDetailsForm.get('aolIm');
  }
  get bio(): any {
    return this.userDetailsForm.get('bio');
  }
  get yahooIm(): any {
    return this.userDetailsForm.get('yahooIm');
  }



}
