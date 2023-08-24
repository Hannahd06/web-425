/**
; Title: my-details.component.ts
; Author: Professor Krasso
; Date: 08/15/2023
; Modified By: Hannah Del Real
; Description: My details Component
*/

import { Component, OnInit } from '@angular/core';

//Export class Person
export default class Person {
    fullName: string;
    favoriteFood: string;
    favoriteColor: string;
    keywords = [
      "#TypeScript", "#2020", "#CodingWithAngular", "#ngOmaha"
    ];
    constructor(fullName: string, favoriteFood: string, favoriteColor: string,) {
      this.fullName = fullName;
      this.favoriteFood = favoriteFood;
      this.favoriteColor = favoriteColor;
    }

    toString() {
      console.log(`\n Full name: ${this.fullName} \n  Favorite food: ${this.favoriteFood} \n Favorite color: ${this.favoriteColor} `);
    }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {
  myProfile: Person;
  constructor() {
    this.myProfile = new Person("Hannah Del Real", "Sushi", "Pink" );
    this.myProfile.toString();
   }

  ngOnInit(): void {
  }

}
