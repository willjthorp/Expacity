import { Component, OnInit } from '@angular/core';

import { QuestionService } from '../../services/question.service'

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  constructor(private questionService: QuestionService) { }

  questionList: Object[]
  visibleForm: boolean = false;

  toggleQuestionForm() {
    this.visibleForm = !this.visibleForm
  }

  ngOnInit() {
    this.getQuestions()
    console.log(this.questionList)
  }

  getQuestions() {
    this.questionService.getQuestions()
      .subscribe((questions) => this.questionList = questions);
  }

  handleAddAnswer(content, questionId) {
    this.questionService.postAnswer(content, questionId);
  }

}
