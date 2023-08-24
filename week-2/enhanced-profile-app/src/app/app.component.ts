/**
; Title: app.component.ts
; Author: Professor Krasso
; Date: 08/15/2023
; Modified By: Hannah Del Real
; Description: App Component for Enhanced Profile App
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: Boolean = true;
  assignment: string = 'Exercise 2.3 - Data Binding';
}
