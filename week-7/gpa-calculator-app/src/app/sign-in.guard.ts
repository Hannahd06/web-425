/**
; Title: sign-in.guard.ts
; Author: Professor Krasso
; Date: 09/19/2023
; Modified By: Hannah Del Real
; Description: Base-Layout Component
*/

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {

  constructor(private router: Router, private cookieService: CookieService) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // define sessionUser to retrieve cookie from the user's browser
    const sessionUser = this.cookieService.get('session_user');

    // Verify if a user is logged in, if not logged in, reroute to sign-in page.

    if (sessionUser) {
      return true;
    } else {
      this.router.navigate(['/session/sign-in']);
      return false;
    }

  }


}
