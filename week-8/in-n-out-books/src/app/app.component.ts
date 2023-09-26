/**
; Title: app.component.ts
; Author: Professor Krasso
; Date: 09/25/2023
; Modified By: Hannah Del Real
; Description: App Component
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  assignment: string;

  constructor() {
    // Assign title as the assignment variable's value
    this.assignment = 'Welcome to In-N-Out-Books'
  }

}
