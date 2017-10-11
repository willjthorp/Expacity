import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { QuestionService } from '../../services/question.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {

  @Input() city
  @Input() showInput = true;
  @Output() notifyNewQuestion: EventEmitter<Object> = new EventEmitter<Object>();

  constructor(private questionService: QuestionService, private route: ActivatedRoute) { }

  visibleForm: boolean = false;

  toggleQuestionForm() {
    this.visibleForm=!this.visibleForm;
  }

  newQuestion = {
    content: '',
    city: '',
    date: new Date(),
    stars: 0,
    answers: []
  };

  submitForm(myForm) {
    this.newQuestion.content = myForm.value.content;
    this.notifyNewQuestion.emit(this.newQuestion);
    this.questionService.postQuestion(myForm.value.content, myForm.value.city)
    this.visibleForm = false;
  }

  autoCompleteCallback1(selectedData:any) {
    this.newQuestion.city = selectedData.name
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.city = params['id']
      if (this.city) {
        this.newQuestion.city = this.city
      }
    });
  }

  public userSettings2: any = {
    geoTypes: ['(cities)'],
    inputPlaceholderText: 'Enter a city...',
    showCurrentLocation: false,
  };

}
