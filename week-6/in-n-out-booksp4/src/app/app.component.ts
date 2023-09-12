/**
; Title: app.component.ts
; Author: Professor Krasso
; Date: 09/11/2023
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
    this.assignment = 'Exercise 6.2 - Input/Output Properties, Part 1'
  }

}
