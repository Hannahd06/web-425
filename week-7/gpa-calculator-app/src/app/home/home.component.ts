/**
; Title: home.component.ts
; Author: Professor Krasso
; Date: 09/19/2023
; Modified By: Hannah Del Real
; Description: Home Component
*/

import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectableGrades: Array<string> = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];

  transcriptEntries: Array<ITranscript> = [];

  transcriptForm: FormGroup;

  // set initial sum of grade values for total gpa value to 0
  gpaTotal: number = 0;

  constructor(private fb: FormBuilder) {

   }

  ngOnInit(): void {
    this.transcriptForm = this.fb.group({
      // Use Validator to make the form fields for course and grade required.
      course: ['', Validators.required],
      grade: ['', Validators.required]
    });
  }

   // Add a get function called form to return transcriptForm controls
  get form() {
    return this.transcriptForm.controls;
  };

  // Create a function to add a new transcriptEntry object to the transcriptEntries Array
  onSubmit(event) {
    this.transcriptEntries.push({course: this.form.course.value, grade: this.form.grade.value});
    event.currentTarget.reset();
  };



  // Create a function to calculate the average gpa value
  calculateResults() {
    let gpa: number = 0;

    for (let entry of this.transcriptEntries) {
      switch(entry.grade) {
        case 'A': gpa +=4.00;
                break;
                case 'A-': gpa +=3.70;
                break;
                case 'B+': gpa +=3.33;
                break;
                case 'B': gpa +=3.00;
                break;
                case 'B-': gpa +=2.70;
                break;
                case 'C+': gpa +=2.30;
                break;
                case 'C': gpa +=2.00;
                break;
                case 'C-': gpa +=1.70;
                break;
                case 'D+': gpa +=1.30;
                break;
                case 'D': gpa +=1.00;
                break;
                case 'D-': gpa +=0.70;
                break;
                default: gpa +=0.00;
                break;
      }

    }

    this.gpaTotal = gpa/ this.transcriptEntries.length;

  };

// Clear list of grades on transcript and rest GPA score to zero
  clearEntries() {
    this.transcriptEntries = [];
    this.gpaTotal = 0;
  }



}
