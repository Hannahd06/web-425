/**
; Title: gpa.component.ts
; Author: Professor Krasso
; Date: 09/13/2023
; Modified By: Hannah Del Real
; Description: GPA Component
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {

  @Input() gpaTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

}
