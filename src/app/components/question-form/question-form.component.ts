import { Component, OnInit } from '@angular/core';

import { QuestionService } from '../../services/question.service'

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {

  constructor(private questionService: QuestionService) { }

  visibleForm: boolean = false;

  toggleQuestionForm() {
    this.visibleForm=!this.visibleForm;
  }

  newQuestion = {
    content: '',
    city: '',
    date: new Date()
  };

  submitForm(myForm) {
    console.log(myForm);
    this.questionService.postQuestion(myForm.value.content, myForm.value.city)
    this.visibleForm = false;
  }

  autoCompleteCallback1(selectedData:any) {
    this.newQuestion.city = selectedData.name
    console.log(this.newQuestion)
    // this.notify.emit(this.newQuestion.city);
  }


  ngOnInit() {
  }

  public userSettings2: any = {
    geoTypes: ['(cities)'],
    inputPlaceholderText: 'Select a city...',
    showSearchButton: false,
  };

}
