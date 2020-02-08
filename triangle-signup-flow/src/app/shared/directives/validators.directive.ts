import { FormControl, AbstractControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
const urlExp = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;
const alphabetMatchPattern = /^[a-zA-Z]+$/;

export function urlValidator(control: AbstractControl): { [key: string]: any } | null {
  if (control.value && !urlExp.test(control.value)) {
    return { 'invalidUrl': true }
  }
  else {
    return null;
  }
}

export function nameValidator(control: AbstractControl): { [key: string]: any } | null {
  if (!alphabetMatchPattern.test(control.value)) {
    return { 'invalidName': true }
  }
  else {
    return null;
  }
}

export function passwordValidator(form: FormGroup): { [key: string]: any } | null {
  if (form.controls.password.value !== form.controls.confirmPass.value) {
    return { 'wrongPassword': true }
  }
  else {
    return null;
  }
}


export class MultiFieldsErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    console.log(control.dirty , form.control.get('pass').invalid);
    return control.dirty && form.control.get('pass').invalid;
  }
}
