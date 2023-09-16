/**
; Title: base-layout.component.ts
; Author: Professor Krasso
; Date: 09/13/2023
; Modified By: Hannah Del Real
; Description: Base-Layout Component
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string;

  constructor() {
    this.assignment = 'Assignment 6.4 - Input Properties'
   }

  ngOnInit(): void {
  }

}
