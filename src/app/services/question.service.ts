import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

const baseUrl = environment.apiUrl;

@Injectable()
export class QuestionService {

  constructor(private http: Http) { }

  getQuestions() {
    return this.http.get(baseUrl + '/question/questions')
      .map((res) => res.json());
  }

  getCityQuestions(city: string) {
    return this.http.get(baseUrl + `/question/cityquestions/${city}`)
      .map((res) => res.json());
  }

  postQuestion(content: string, city: string) {
    return this.http.post(baseUrl + `/question/questions`, {content: content, city: city, date: new Date()})
      .map((res) => res.json())
      .subscribe()
  }

  addQuestionStar(questionId: string) {
    return this.http.get(baseUrl + `/question/${questionId}/addQuestionStar`)
      .map((res) => res.json())
      .subscribe()
  }

  addAnswerStar(questionId: string, answerId: string) {
    return this.http.get(baseUrl + `/question/${questionId}/addAnswerStar/${answerId}`)
      .map((res) => res.json())
      .subscribe()
  }

  getAnswers() {
    return this.http.get(baseUrl + '/question/questions')
      .map((res) => res.json());
  }

  postAnswer(content: string, questionId: string) {
    return this.http.post(baseUrl + `/question/${questionId}/addanswer`, {content: content, date: new Date()})
      .map((res) => res.json())
      .subscribe()
  }

}
