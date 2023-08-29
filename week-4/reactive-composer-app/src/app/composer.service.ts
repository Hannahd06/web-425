/**
; Title: composer.service.ts
; Author: Professor Krasso
; Date: 08/28/2023
; Modified By: Hannah Del Real
; Description: Composer Service Class containing Composer objects
*/


import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  composers: Array<IComposer>
  constructor() {
    this.composers = [
      {
        composerId: 100, fullName: "Ludwig Von Beethoven", genre: "Classical"
      },
      {
        composerId: 101, fullName: "Frédéric Chopin", genre: "Classical"
      },
      {
        composerId: 102, fullName: "Wolfgang Amadeus Mozart", genre: "Classical"
      },
      {
        composerId: 103, fullName: "Philip Glass", genre: "Minimalism"
      },
      {
        composerId: 104, fullName: "Claudio Monteverdi", genre: "Opera"
      }
    ]
  }

  // Return list of composers objects
  getComposers() {
    return this.composers;
  }

  // Return composer info for composer that matches composerId.
  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }
}
