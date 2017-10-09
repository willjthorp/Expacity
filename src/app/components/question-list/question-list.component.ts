import { Component, OnInit, Input } from '@angular/core';

import { QuestionService } from '../../services/question.service'

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  @Input() questionList: Object[]

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    if (!this.questionList) {
      this.getQuestions()
    }
  }


  getQuestions() {
    this.questionService.getQuestions()
      .subscribe((questions) => this.questionList = questions);
  }

  handleAddAnswer(content, questionId) {
    this.questionService.postAnswer(content, questionId);
  }

}
