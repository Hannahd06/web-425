/**
 * Title: app.component.ts
 * Author: Professor Krasso
 * Modified by: Hannah Del Real
 * Date: 15 August 2023
 * Description: App Component
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = 'Exercise 2.3 - Data Binding';
}
