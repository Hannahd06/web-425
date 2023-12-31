/**
; Title: composer-list.component.ts
; Author: Professor Krasso
; Date: 08/17/2023
; Modified By: Hannah Del Real
; Description: Composer List Component
*/

import { Component, OnInit } from '@angular/core';

//Create Composer Class with fullName and genre
export default class Composer {
  fullName: string;
  genre: string;
  constructor(fullName: string, genre:string) {
    this.fullName = fullName;
    this.genre = genre;
  }

  toString() {
    console.log(`\n  Full Name: ${this.fullName}\n  Genre: ${this.genre}`)
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {
  composers: Array<Composer>;
  constructor() {
    this.composers = [
      new Composer("Ludwig Von Beethoven", "Classical"),
      new Composer("Frédéric Chopin", "Classical"),
      new Composer("Wolfgang Amadeus Mozart", "Classical"),
      new Composer("Philip Glass", "Minimalism"),
      new Composer("Claudio Monteverdi", "Opera")
    ]
   }

  ngOnInit(): void {
  }

}
