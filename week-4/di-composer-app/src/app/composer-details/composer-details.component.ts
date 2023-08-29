/**
; Title: composer-details.ts
; Author: Professor Krasso
; Date: 08/28/2023
; Modified By: Hannah Del Real
; Description: Composer Details based on composerId
*/

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {

  composerId: number;
  composer: IComposer;

// Use ActivatedRoute to access value for composerId and activate new instance of ComposerService
  constructor(private route: ActivatedRoute, private composerService: ComposerService) {
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'), 10);

    if (this.composerId) {

      // Use dependency injection to create new instance of composerService
      this.composer = this.composerService.getComposer(this.composerId);
    }

  }

  ngOnInit(): void {
  }

}
