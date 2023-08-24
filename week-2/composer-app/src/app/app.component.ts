/**
; Title: app.component.ts
; Author: Professor Krasso
; Date: 08/17/2023
; Modified By: Hannah Del Real
; Description: Composer List Component
*/


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment = 'Assignment 2.4 - composer-app';
}
