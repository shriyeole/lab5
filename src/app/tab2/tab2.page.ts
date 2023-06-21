import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  currentIndex: number = 0;
  selectedAnswer: string | undefined;
  score: number = 0;
  showResult: boolean = false;

  questions: any[] = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Madrid', 'Rome'],
      answer: 'Paris',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Venus', 'Mercury', 'Jupiter'],
      answer: 'Mars',
    },
    // Add more questions here...
  ];

  constructor(private alertController: AlertController) {}

  checkAnswer() {
    if (this.selectedAnswer === this.questions[this.currentIndex].answer) {
      this.score++;
    }

    if (this.currentIndex === this.questions.length - 1) {
      this.showResult = true;
    } else {
      this.currentIndex++;
      this.selectedAnswer ;
    }
  }

  async restartQuiz() {
    this.currentIndex = 0;
    this.selectedAnswer ;
    this.score = 0;
    this.showResult = false;
  }
}
