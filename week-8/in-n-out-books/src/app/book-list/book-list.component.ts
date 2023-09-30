/**
; Title: book-list.component.ts
; Author: Professor Krasso
; Date: 09/25/2023
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
  // create a books variable as an array of IBook.
  books: Array<IBook> = [];
  book: IBook;

  constructor(private booksService: BooksService, private dialog: MatDialog) {

    // Subscribe to the getBooks function.
    this.booksService.getBooks().subscribe(res => {

      console.log(res);
      // Create a for...in loop to loop over the the response data object to check if hasOwnProperty() is true.
      for (let key in res) {

        // If returns true, push the res object to the books array.
        if (res.hasOwnProperty(key)) {
          // create an author variable as an array to the object property authors as an array of names.
          let authors = [];
          if (res[key].details.authors) {
            authors = res[key].details.authors.map(function(author) {
              return author.name;
            })
          }
          // Push the object properties isbn, title, description, numOfPages, and authors to the books array.
          this.books.push({
            isbn: res[key].details.isbn_13 ? res[key].details.isbn_13 : res[key].details.isbn_10,
            title: res[key].details.title,
            description: res[key].details.subtitle ? res[key].details.subtitle: 'N/A',
            numOfPages: res[key].details.number_of_pages,
            authors: authors
          })
        }
      }
    })
   }

  ngOnInit(): void {
  }

  // Display  book details based on user isbn selection.
 showBookDetails(isbn: string) {
  // Use JS built in find function to search books array and return book object with matching isbn value.
  this.book = this.books.find(book => book.isbn === isbn);

  // Create a variable to contain dialog content.
  const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
    data: {
      book:this.book
    },
    disableClose: true,
    width: '800px'
  });
   //  Close dialog  box.
  dialogRef.afterClosed().subscribe(result =>{
    if (result === confirm) {
       this.book = null;
    }
  });
  console.log(this.book);
}



}
