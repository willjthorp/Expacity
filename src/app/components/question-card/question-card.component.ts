import { Component, OnInit,Input } from '@angular/core';

import { QuestionService } from '../../services/question.service'

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent implements OnInit {

  @Input() question: any

  visibleAnswers = false

  constructor(private questionService: QuestionService) { }

  newAnswer = {
    content: ''
  }

  toggleAnswerList() {
    this.visibleAnswers = !this.visibleAnswers
  }

  ngOnInit() {
    console.log(this.question)
  }

  submitForm(myForm) {
    console.log(myForm);
    this.questionService.postAnswer(myForm.value.answer, this.question._id)
  }

}
