/**
; Title: base-layout.component.ts
; Author: Professor Krasso
; Date: 09/19/2023
; Modified By: Hannah Del Real
; Description: Base-Layout Component
*/

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string;

  constructor(private cookieService: CookieService, private router: Router) {
    this.assignment = 'Assignment 7.2 - Reactive Forms'
   }

  ngOnInit(): void {
  }
 // Create a function to delete cookies and navigate user back to the sign-in page.
  signOut() {

    this.cookieService.deleteAll();
    this.router.navigate(['/session/sign-in']);

  }


}
