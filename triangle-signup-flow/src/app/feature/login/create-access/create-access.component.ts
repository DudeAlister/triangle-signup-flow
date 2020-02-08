import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { urlValidator, nameValidator, passwordValidator, MultiFieldsErrorMatcher } from 'src/app/shared/directives/validators.directive';



@Component({
  selector: 'app-create-access',
  templateUrl: './create-access.component.html',
  styleUrls: ['./create-access.component.css']
})
export class CreateAccessComponent implements OnInit {

  userDetailsForm: FormGroup;
  multiFieldsErrorMatcher: MultiFieldsErrorMatcher = new MultiFieldsErrorMatcher();


  constructor(private fb: FormBuilder) { }

  initializeForm(): FormGroup {
    return this.fb.group({
      userName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormGroup({
        password: new FormControl('', [Validators.required]),
        confirmPass: new FormControl('',[Validators.required])
      }, { validators: passwordValidator })
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
