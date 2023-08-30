/**
; Title: app.component.ts
; Author: Professor Krasso
; Date: 08/28/2023
; Modified By: Hannah Del Real
; Description: App Component
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment = 'Assignment 4.4 - Async Pipe';
}
