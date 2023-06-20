import { Component, OnInit } from '@angular/core';
import { NumberToWordService } from '../services/number-to-word.service';

interface Question {
  number: number;
  image: string;
  options: number[];
  answer: number;
}

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.page.html',
  styleUrls: ['./numbers.page.scss'],
})
export class NumbersPage {

  constructor(private numberToWordService: NumberToWordService) {
    this.showNextNumber();
    
  }

  currentNumber: number=0;
  userInput: string='';
  resultMessage: string='';
  resultColor: string='';

  showNextNumber() {
    this.currentNumber = Math.floor(Math.random() * 10); // Generate a random number between 0 and 999
    this.userInput = '';
    this.resultMessage = '';
  }

  checkAnswer() {
    const expectedWord = this.numberToWordService.convertToWord(this.currentNumber);
    if (this.userInput.toLowerCase() === expectedWord.toLowerCase()) {
      this.resultMessage = 'Correct!';
      this.resultColor = 'green';
    } else {
      this.resultMessage = 'Wrong! Try again.';
      this.resultColor = 'red';
    }
  }
  

}
