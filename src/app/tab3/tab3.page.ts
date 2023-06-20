import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}
  name: string = "Sam Verma";
  age: number = 15;
  class: string = "Grade 10";
  school: string = "ABC School";
  photoUrl: string = "assets/pro.png";
}
