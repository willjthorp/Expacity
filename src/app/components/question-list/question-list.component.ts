import { Component, OnInit, Input } from '@angular/core';

import { QuestionService } from '../../services/question.service'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  @Input() userQuestions: any

  questionList: any;
  currentCity: String;
  selectedCategory = "Newest"

  constructor(
    private auth: AuthService,
    private questionService: QuestionService
  ) { }

  // Get all questions if not on profile page
  ngOnInit() {
    if (!this.userQuestions) {
      this.getQuestions()
    } else {
      this.questionList = this.userQuestions
    }
  }

  // Receive added question and push it to start of question array
  receiveNewQuestion(question) {
    question.justAdded = true;
    question.creator = this.auth.getUser();
    this.questionList.unshift(question);
    setTimeout(() => question.justAdded = false, 500);
  }

  // Function to call back end and retrieve all questions
  getQuestions() {
    this.questionService.getQuestions()
      .subscribe((questions) => {
        this.questionList = questions
        this.questionList.forEach((question) => {
          question.answers.sort((a,b) => {
            return b.stars - a.stars
          });
        });
      });
  }

  // Function to post answer to back end
  handleAddAnswer(content, questionId) {
    this.questionService.postAnswer(content, questionId).subscribe();
  }

  // Callback to filter questions  city search
  autoCompleteCallback1(selectedData:any) {
    this.currentCity = selectedData.name
    this.questionService.getCityQuestions(selectedData.name)
      .subscribe((questions) => {
        this.questionList = questions;
        this.questionList.forEach((question) => {
          question.answers.sort((a,b) => {
            return b.stars - a.stars
          });
        });
        this.sort(this.selectedCategory);
      });
  }

  sort(item): void {
    switch (item) {
      case 'Newest':
        this.questionList.sort((a, b) => {
          a = new Date(a.date);
          b = new Date(b.date);
          return b - a
        });
        break;
      case 'Oldest':
        this.questionList.sort((a, b) => {
          a = new Date(a.date);
          b = new Date(b.date);
          return a - b
        });
        break;
      case 'Most Starred':
        this.questionList.sort((a, b) => {
          return b.stars - a.stars
        });
        break;
      case 'Most Answered':
        this.questionList.sort((a, b) => {
          return b.answers.length - a.answers.length
        });
        break;
    }
  }

  public userSettings2: any = {
    geoTypes: ['(cities)'],
    inputPlaceholderText: 'Filter by city...',
    showSearchButton: false,
    showCurrentLocation: false,
  };


  //Dropdown box settings ----------------------------------------------------------------------------------------

  items:Array<string> = ['Newest', 'Oldest', 'Most Starred', 'Most Answered']


}
