/**
; Title: app.routing.module.ts
; Author: Professor Krasso
; Date: 09/04/2023
; Modified By: Hannah Del Real
; Description: Routing for In-N-Out Books Angular App
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'book-list',
    component: BookListComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
