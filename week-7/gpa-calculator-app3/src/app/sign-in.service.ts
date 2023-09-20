/**
; Title: transcript.interface.ts
; Author: Professor Krasso
; Date: 09/19/2023
; Modified By: Hannah Del Real
; Description: Sign-In Service
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  studentIds: Array<number>;

  constructor() {
    // Create an array of acceptable id values for validation
    this.studentIds =[1007, 1008, 1009, 1010, 1011, 1012];
   }

   // Create a function that will check if user input matches any of the acceptable ID values.
   validate(studentId: number) {

    /**
     * Us the .some to search over an array of studentId values and return a true or false value.
     * If input matches any value in the array, return true
     * If input doesn't match any values return false.
     */
    return this.studentIds.some(id => id === studentId)
   }
}
