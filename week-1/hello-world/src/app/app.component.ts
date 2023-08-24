/**
; Title: app.component.ts
; Author: Professor Krasso
; Date: 08/10/2023
; Modified By: Hannah Del Real
; Description: Hello-World App Component
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myWorld = "You are now in Hannah's world";
}
