/**
; Title: book-list.component.ts
; Author: Professor Krasso
; Date: 09/06/2023
; Modified By: Hannah Del Real
; Description: Book-List Component
*/

import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Observable<IBook[]>;
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors'];
  book: IBook;

  constructor(private booksService: BooksService, private dialog: MatDialog) {
    // Call the getBooks function and map it to Array of IBook objects
    this.books = this.booksService.getBooks();

   }

  ngOnInit(): void {
  }

  // Display book details for the book with the isbn number that matches user input
  showBookDetails(isbn: string) {
    this.book = this.booksService.getBook(isbn);
    // Create a variable to contain
    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: {
        book:this.book
      },
      disableClose: true,
      width: '800px'
    });
    dialogRef.afterClosed().subscribe(result =>{
      if (result === confirm) {
         this.book = null;
      }
    });
    console.log(this.book);
  }

}
