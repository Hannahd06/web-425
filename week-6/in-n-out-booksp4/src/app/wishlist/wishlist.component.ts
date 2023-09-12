/**
; Title: wishlist.component.ts
; Author: Professor Krasso
; Date: 09/11/2023
; Modified By: Hannah Del Real
; Description: WishList Component
*/

import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  items: Array<IWishlistItem> = [];
  constructor() { }

  ngOnInit(): void {
  }

  // Create a function that will past a new wishlist item to the items array
  updateItemHandler(item: IWishlistItem) {
    this.items.push(item);

  }

}
