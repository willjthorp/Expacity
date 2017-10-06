import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent implements OnInit {

  @Input() question: Object;

  constructor() { }

  newAnswer = {
    content: ''
  }

  ngOnInit() {
  }

}
