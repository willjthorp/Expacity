import { Component, OnInit,Input } from '@angular/core';
import { environment } from '../../../environments/environment'

import { QuestionService } from '../../services/question.service'

import { User } from '../../models/user.model'


@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent implements OnInit {

  @Input() question: any

  user: User | null;
  visibleAnswers = false;
  submitted = false;
  answerIndex: number
  picUrl = environment.apiUrl;

  constructor(private questionService: QuestionService) { }

  newAnswer = {
    content: ''
  }

  toggleAnswerList() {
    this.visibleAnswers = !this.visibleAnswers
  }

  ngOnInit() {
    // xxx load the user (sync + async)
  }

  submitAnswerForm(myForm) {
    this.submitted = true;
    if (myForm.invalid) {
      return;
    }
    this.questionService.postAnswer(myForm.value.answer, this.question._id)
    this.question.answers.push({
      content: myForm.value.answer,
      date: new Date(),
      stars: 0
    })
  }

  handleAddQuestionStar(id) {
    this.questionService.addQuestionStar(id).subscribe()
    this.question.stars++;
  }

  handleAddAnswerStar(questionId, answerId) {
    this.questionService.addAnswerStar(questionId, answerId).subscribe();
    this.question.answers.find(c => c._id === answerId).stars++;
  }

}
