/**
; Title: person.class.ts
; Author: Professor Krasso
; Date: 08/11/2023
; Modified By: Hannah Del Real
; Description: Person Class
*/

import { IPerson } from "./person.interface";

//Create a class named Person from IPerson with first and last name
class Person implements IPerson {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let myName = new Person("Hannah", "Del Real");
console.log(`My name is ${myName.firstName} ${myName.lastName}`);