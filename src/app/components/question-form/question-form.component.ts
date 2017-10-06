import { Component, OnInit } from '@angular/core';

import { QuestionService } from '../../services/question.service'

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {

  constructor(private questionService: QuestionService) { }

  newQuestion = {
    content: '',
    city: '',
    date: new Date()
  };

  handleSubmitClick(content: string, city: string){
    this.questionService.postQuestion(content, city)
  }

  submitForm(myForm) {
    console.log(myForm);
  }


  ngOnInit() {
  }

  public userSettings2: any = {
    geoTypes: ['(cities)'],
    inputPlaceholderText: 'Enter a city...',
    showSearchButton: false,
  };

}
