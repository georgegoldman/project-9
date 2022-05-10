import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  hide = true;
  checked = false;

  constructor() { }

  onSubmit(): void {}

  getEmailErrorMessage(){}
  getUsernameErrorMessage(){}
  getPasswordErrorMessage(){}

  ngOnInit(): void {
  }

}
