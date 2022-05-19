import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  hide = true;

  signIn = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    termsCondition: new FormControl('', Validators.required),
  })

  constructor() { }

  onSubmit(): void {
    console.log(this.signIn.getRawValue())
  }

  getEmailErrorMessage(formControlName: string): string {
    return this.signIn.controls[formControlName].hasError('email') ? 'please enter a proper email' : ''
  }
  getFieldRequiredErrorMessage(formControlName: string): string{
    return this.signIn.controls[formControlName].hasError('required') ? 'Please this field is required' : ''
  }

  ngOnInit(): void {
  }

}
