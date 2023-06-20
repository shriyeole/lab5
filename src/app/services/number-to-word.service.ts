import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberToWordService {
  private units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  private teens = [
    '', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
  ];
  private tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  convertToWord(number: number): string {
    if (number === 0) {
      return 'zero';
    }

    if (number < 0) {
      return 'minus ' + this.convertToWord(Math.abs(number));
    }

    let word = '';

    if (number < 10) {
      word = this.units[number];
    } else if (number < 20) {
      word = this.teens[number - 10];
    } else if (number < 100) {
      const tensDigit = Math.floor(number / 10);
      const remainder = number % 10;
      word = this.tens[tensDigit] + ' ' + this.units[remainder];
    } else {
      const hundredsDigit = Math.floor(number / 100);
      const remainder = number % 100;
      word = this.units[hundredsDigit] + ' hundred ' + this.convertToWord(remainder);
    }

    return word.trim();
  }
}
