import { Component, OnInit,Input } from '@angular/core';

import { QuestionService } from '../../services/question.service'

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent implements OnInit {

  @Input() question: any

  // xxx user: User | null;
  visibleAnswers = false;
  submitted = false;
  voted = false; // xxx remove
  answerStarVotes = [];
  answerIndex: number

  constructor(private questionService: QuestionService) { }

  newAnswer = {
    content: ''
  }

  toggleAnswerList() {
    this.visibleAnswers = !this.visibleAnswers
  }

  ngOnInit() {
    // xxx load the user (sync + async)
    this.question.answers.forEach((item, index) => {
      this.answerStarVotes.push(item._id)
    })
  }

  submitAnswerForm(myForm) {
    this.submitted = true;
    if (myForm.invalid) {
      return;
    }
    this.questionService.postAnswer(myForm.value.answer, this.question._id)
  }

  handleAddQuestionStar(id) {
    this.questionService.addQuestionStar(id)
    this.voted = true;
    this.question.stars++;
  }

  handleAddAnswerStar(questionId, answerId) {
    this.questionService.addAnswerStar(questionId, answerId)
    this.answerIndex = this.answerStarVotes.indexOf('votedAnswer' + answerId);
    this.answerStarVotes[this.answerIndex] = true;
    this.question.answers.find(c => c._id === answerId).stars++;
  }

}
