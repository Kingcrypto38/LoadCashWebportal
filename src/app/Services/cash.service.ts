import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CashService {

  constructor() { }

  cashData: {totalNotes: number, totalValue: number} = {totalNotes: 0, totalValue: 0}
 }
