import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {
    
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
