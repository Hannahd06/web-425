/**
; Title: wishlist-create.component.ts
; Author: Professor Krasso
; Date: 09/11/2023
; Modified By: Hannah Del Real
; Description: Component to create a new item to add to wishlist
*/

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';
@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.scss']
})
export class WishlistCreateComponent implements OnInit {

  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();

  item: IWishlistItem;

  constructor() {
    // Instantiate a new wishlist item and set it to type this.item
    this.item = {} as IWishlistItem;
  }

  ngOnInit(): void {
  }
// Create function to be called when user wants to add an item to wishlist.
  addItem() {
    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors
    })

    // Clear form after values have been emitted to wishlist
    this.item = {} as IWishlistItem;
  }

}
