import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class NumberService {
  numberFromService = 100;
  numberPractice = 999;
  numberTest = 888;
  stringTest = "I'm test!";
  constructor() { }
}
