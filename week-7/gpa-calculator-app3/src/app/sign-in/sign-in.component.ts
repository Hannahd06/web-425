/**
; Title: sign-in.component.ts
; Author: Professor Krasso
; Date: 09/19/2023
; Modified By: Hannah Del Real
; Description: Sign-in Component
*/

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SignInService } from '../sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;

  errorMessage: string;

  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signInService: SignInService) {

   }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      studentId: ''
    })
  }

  onSubmit(){
    // Create a variable to capture the values from the form
    const formValues = this.signInForm.value;

    // Create a variable to hold the student Id value
    const studentId = parseInt(formValues.studentId);

    // Call the signIn Service to validate inputted UserId
    if (this.signInService.validate(studentId)) {
      this.cookieService.set('session_user', studentId.toString(), 1);
      this.router.navigate(['/'])
    } else {
      this.errorMessage = 'The student ID you entered does not match any in of our records. Please try again.'
    }

  }

}
