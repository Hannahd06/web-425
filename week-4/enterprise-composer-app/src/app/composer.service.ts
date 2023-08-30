/**
; Title: composer.service.ts
; Author: Professor Krasso
; Date: 08/28/2023
; Modified By: Hannah Del Real
; Description: Composer Service Class containing Composer objects
*/


import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

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

  // Return an observable array containing a list of composers objects
  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }

  // Return composer info for composer that matches composerId.
  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }
// Filter through list of composers by matching user's input to composer's full name
  filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(map(composers => composers.filter(composer => composer.fullName.toLowerCase().indexOf(name) > -1)))
  }
}
