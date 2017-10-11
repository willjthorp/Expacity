import { Component, OnInit, Input } from '@angular/core';

import { QuestionService } from '../../services/question.service'

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  @Input() questionList: any

  currentCity: String;
  selectedCategory: string;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.getQuestions()
  }

  receiveNewQuestion(question) {
    this.questionList.push(question)
    console.log(this.questionList)
  }

  getQuestions() {
    this.questionService.getQuestions()
      .subscribe((questions) => {
        this.questionList = questions
        console.log(this.questionList)
        this.questionList.forEach((question) => {
          question.answers.sort((a,b) => {
            return b.stars - a.stars
          });
        });
      });
  }

  handleAddAnswer(content, questionId) {
    this.questionService.postAnswer(content, questionId);
  }

  autoCompleteCallback1(selectedData:any) {
    this.currentCity = selectedData.name
    this.questionService.getCityQuestions(selectedData.name)
      .subscribe((questions) => {
        this.questionList = questions;
        this.filter(this.selectedCategory);
      });
  }

  filter(item): void {
    console.log('filtering')
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
