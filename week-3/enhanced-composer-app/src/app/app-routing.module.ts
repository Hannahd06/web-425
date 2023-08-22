/**
; Title: app-routing.class.ts
; Author: Professor Krasso
; Date: 08/17/2023
; Modified By: Hannah Del Real
; Description: routing
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/composer-list',
    pathMatch: 'full'
  },
  {
    path: 'composer-list',
    component: ComposerListComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'composer-details/:composerId',
    component: ComposerDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
