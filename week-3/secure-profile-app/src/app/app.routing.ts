/**
 * Title: app.routing.ts
 * Author: Professor Krasso
 * Modified by: Hannah Del Real
 * Date: 22 August 2023
 * Description: App Routing
 */

import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SignInComponent } from "./sign-in/sign-in.component";

export const AppRoutes: Routes = [
  {
    path: '',
    component: SignInComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }

]
