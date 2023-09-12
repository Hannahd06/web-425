/**
; Title: book.service.ts
; Author: Professor Krasso
; Date: 09/05/2023
; Modified By: Hannah Del Real
; Description: Book Service
*/

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBook } from './book.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
books: Array<IBook>;

  constructor() {
    this.books = [
      {
        isbn: '9780141439518',
        title: 'Pride and Prejudice',
        description: 'The tale of a turbulent relationship between  Elizabeth and Mr. Darcy.',
        numOfPages: 448,
        authors: ['Jane Austen']
      },
      {
        isbn: '9780441020836',
        title: 'The Once and Future King',
        description: 'The story of King Arthur.',
        numOfPages: 656,
        authors: ['T.H. White']
      },
      {
        isbn: '9780439139601',
        title: 'Harry Potter and the Goblet of Fire ',
        description: 'The fourth installment of the Harry Potter Series.',
        numOfPages: 752,
        authors: ['J.K. Rowling']
      },
      {
        isbn: '9782377877003',
        title: 'Complete Tales And Poems Of Edgar Allen Poe With Selections From His Critical Writings',
        description: 'Compilation of the Edgar Allen Poes greatest work.',
        numOfPages: 128,
        authors: ['Edgar Allen Poe']
      },
      {
        isbn: '9780743273565',
        title: 'The Great Gatsby',
        description: 'The story of Jay Gatsby and his struggle to achieve the American dream written from the point of view of narrator Nick Carraway',
        numOfPages: 208,
        authors: ['F. Scott Fitzgerald']
      }
    ]
   }

   // Return an Observable array of IBook objects
   getBooks(): Observable<IBook[]> {
    return of(this.books);
   }

   // Loop over IBook array and return an IBook object with an ISBN that matches user input
   getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
   }
}
