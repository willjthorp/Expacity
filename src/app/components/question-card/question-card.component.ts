import { Component, OnInit,Input } from '@angular/core';

import { QuestionService } from '../../services/question.service'

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent implements OnInit {

  @Input() question: any

  visibleAnswers = false;
  voted = false;
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
    this.question.answers.forEach((item, index) => {
      this.answerStarVotes.push(item._id)
    })
    console.log(this.answerStarVotes)
  }

  submitAnswerForm(myForm) {
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
