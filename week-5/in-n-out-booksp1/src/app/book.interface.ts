/**
; Title: app.interface.ts
; Author: Professor Krasso
; Date: 09/04/2023
; Modified By: Hannah Del Real
; Description: Book Interface
*/
export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
