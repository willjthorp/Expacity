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

  // Show / hide add new question form
  toggleQuestionForm() {
    this.visibleForm=!this.visibleForm;
  }

  // New question set-up
  newQuestion = {
    content: '',
    city: '',
    date: new Date(),
    stars: 0,
    answers: []
  };

  // Submit a new question and subscribe to the question being retrieved
  submitForm(myForm) {
    this.newQuestion.content = myForm.value.content;
    this.questionService.postQuestion(myForm.value.content, myForm.value.city).subscribe((question) => {
      this.notifyNewQuestion.emit(question);
    })
    this.visibleForm = false;
  }

  // Callback from city search bar
  autoCompleteCallback1(selectedData:any) {
    this.newQuestion.city = selectedData.name
  }

  // Auto set city if asking a question on the city page
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.city = params['id']
      if (this.city) {
        this.newQuestion.city = this.city
      }
    });
  }

  // Settings for city search bar
  public userSettings2: any = {
    geoTypes: ['(cities)'],
    inputPlaceholderText: 'Enter a city...',
    showCurrentLocation: false,
  };

}
