/**
; Title: book-list.component.ts
; Author: Professor Krasso
; Date: 09/04/2023
; Modified By: Hannah Del Real
; Description: Book-List Component
*/

import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Observable<IBook[]>;
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors'];
  book: IBook;

  constructor(private booksService: BooksService) {
    // Call the getBooks function and map it to Array of IBook objects
    this.books = this.booksService.getBooks();
   }

  ngOnInit(): void {
  }

  // Display book details for the book with the isbn number that matches user input
  showBookDetails(isbn: string) {
    this.book = this.booksService.getBook(isbn);
    console.log(this.book);
  }

}
