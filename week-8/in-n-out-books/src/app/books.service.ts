/**
; Title: book.service.ts
; Author: Professor Krasso
; Date: 09/25/2023
; Modified By: Hannah Del Real
; Description: Book Service
*/

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  // Create a variable name isbns containing an array of isbn values.
  isbns: Array<string> = [
    '0345339681',
    '0261103571',
    '9780593099322',
    '9780261102361',
    '9780261102378',
    '9780590302715',
    '9780316769532',
    '9780743273565',
    '9780590405959'
  ];

  constructor(private http: HttpClient) { }

   // Return an Observable array of IBook objects
   getBooks() {
    // Create a variable named params to instantiate a new instace of HttpParams.
    let params = new HttpParams();
    // Use the params.append function to add entry for bibkeys and isbn.
    params = params.append('bibkeys',`ISBN:${this.isbns.join(',')}`);

    // Use the params.append function to add entry for bibkeys and isbn.
    params = params.append('format', 'json');

    // Use the params.append function to add entry for bibkeys and isbn.
    params = params.append('jscmd', 'details');

    // Call the http.get function and pass in the url for the openlibary with the above params.
    return this.http.get('https://openlibrary.org/api/books', {params: params})
   }

}
