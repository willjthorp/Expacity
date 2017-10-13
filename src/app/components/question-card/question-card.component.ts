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
  voted = false;
  answerIndex: number
  picUrl = environment.apiUrl;

  constructor(private questionService: QuestionService) { }

  newAnswer = {
    content: ''
  }

  // Show / hide answer list
  toggleAnswerList() {
    this.visibleAnswers = !this.visibleAnswers
  }

  ngOnInit() {
  }

  // Submit a new answer
  submitAnswerForm(myForm) {
    this.submitted = true;
    if (myForm.invalid) {
      return;
    }
    this.questionService.postAnswer(myForm.value.answer, this.question._id).subscribe();
    this.question.answers.push({
      content: myForm.value.answer,
      date: new Date(),
      stars: 0
    })
  }

  // Add a star to the question
  handleAddQuestionStar(id) {
    this.questionService.addQuestionStar(id).subscribe()
    this.voted = true;
    this.question.stars++;
  }

  // Add a star to the answer
  handleAddAnswerStar(questionId, answerId) {
    this.questionService.addAnswerStar(questionId, answerId).subscribe();
    this.question.answers.find(c => c._id === answerId).stars++;
  }

}
