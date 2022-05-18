import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  hide = true;

  signUp = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    termsCondition: new FormControl('', Validators.required),
  })

  constructor() { }

  onSubmit(): void {
    console.log(this.signUp.getRawValue())
  }

  getEmailErrorMessage(formControlName: string): string {
    return this.signUp.controls[formControlName].hasError('email') ? 'please enter a proper email' : ''
  }

  getMinLinErrorMessage(formControlName: string): string {
    return this.signUp.controls[formControlName].hasError('minlength') ? 'Your text is less than 8' : ''
  }
  getFieldRequiredErrorMessage(formControlName: string): string{
    return this.signUp.controls[formControlName].hasError('required') ? 'Please this field is required' : ''
  }
  ngOnInit(): void {
  }

}
