/**
 * Title: home.component.ts
 * Author: Professor Krasso
 * Modified by: Hannah Del Real
 * Date: 15 August 2023
 * Description: home Component navigate to activated route
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

}
