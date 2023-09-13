/**
; Title: base-layout.module.ts
; Author: Professor Krasso
; Date: 09/12/2023
; Modified By: Hannah Del Real
; Description: Base-Layout Module
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
    this.assignment = 'Exercise 6.3 - Layouts'
   }

  ngOnInit(): void {
  }

}
