import { Component } from '@angular/core';
import { NavController} from '@ionic/angular';
import { NumberToWordService } from '../services/number-to-word.service';

interface Question {
  number: number;
  image: string;
  options: number[];
  answer: number;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

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
  
  alphabets: string[] = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];
  selectedWord: string | null = null;

  getWordByAlphabet(alphabet: string): string {
    const words: { [key: string]: string } = {
      A: 'Apple',
      B: 'Banana',
      C: 'Cat',
      D: 'Dog',
      E: 'Elephant',
      F: 'Fish',
      G: 'Giraffe',
      H: 'Horse',
      I: 'Ice Cream',
      J: 'Jellyfish',
      K: 'Kangaroo',
      L: 'Lion',
      M: 'Monkey',
      N: 'Nightingale',
      O: 'Octopus',
      P: 'Penguin',
      Q: 'Queen',
      R: 'Rabbit',
      S: 'Sunflower',
      T: 'Tiger',
      U: 'Umbrella',
      V: 'Violet',
      W: 'Whale',
      X: 'Xylophone',
      Y: 'Yak',
      Z: 'Zebra'
    };

    return words[alphabet] || 'No word found';
  }

  displayWord(alphabet: string) {
    this.selectedWord = alphabet;
  }
}