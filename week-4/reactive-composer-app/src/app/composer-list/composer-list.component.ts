/**
; Title: composer-list.component.ts
; Author: Professor Krasso
; Date: 08/17/2023
; Modified By: Hannah Del Real
; Description: composer-list Component
*/

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {
  // Create local component variable called composers
  composers: Array<IComposer>

  // Initiate a new instance of FormControl
  txtSearchControl = new FormControl('');

  constructor(private composerService: ComposerService) {

    // Use dependency injection to create new instance of composerService
    this.composers = this.composerService.getComposers();

    // When user types in value in formControl, call filterComposer function after 500 milliseconds
    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val));

   }

  ngOnInit(): void {
  }

  filterComposers(name: string) {
    alert(name);
  }

}
