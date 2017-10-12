import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'

import { environment } from '../../environments/environment';



const baseUrl = environment.apiUrl;

@Injectable()
export class QuestionService {

  constructor(private http: Http) { }

  getQuestions() {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(baseUrl + '/question/questions', options)
      .map((res) => res.json());
  }

  getCityQuestions(city: string) {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(baseUrl + `/question/cityquestions/${city}`, options)
      .map((res) => res.json());
  }

  postQuestion(content: string, city: string) {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.post(baseUrl + `/question/questions`, {content: content, city: city, date: new Date()}, options)
      .map((res) => res.json())
      .subscribe()
  }

  addQuestionStar(questionId: string) {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(baseUrl + `/question/${questionId}/addQuestionStar`, options)
      .map((res) => res.json())
      .subscribe()
  }

  addAnswerStar(questionId: string, answerId: string) {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(baseUrl + `/question/${questionId}/addAnswerStar/${answerId}`, options)
      .map((res) => res.json())
      .subscribe()
  }

  getAnswers() {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(baseUrl + '/question/questions', options)
      .map((res) => res.json());
  }

  postAnswer(content: string, questionId: string) {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.post(baseUrl + `/question/${questionId}/addanswer`, {content: content, date: new Date()}, options)
      .map((res) => res.json())
      .subscribe()
  }

}
