import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class QuestionService {

  constructor(private http: Http) { }

  getQuestions() {
    return this.http.get('http://localhost:3000/question/questions')
      .map((res) => res.json());
  }

  getCityQuestions(city: string) {
    return this.http.get(`http://localhost:3000/question/cityquestions/${city}`)
      .map((res) => res.json());
  }

  postQuestion(content: string, city: string) {
    console.log('BOOO', content, city)
    return this.http.post(`http://localhost:3000/question/questions`, {content: content, city: city, date: new Date()})
      .map((res) => res.json())
      .subscribe()
  }

  getAnswers() {
    return this.http.get('http://localhost:3000/question/questions')
      .map((res) => res.json());
  }

  postAnswer(content: string, questionId: string) {
    console.log('WOOO', content, 'YAAa', questionId)
    return this.http.post(`http://localhost:3000/question/${questionId}/addanswer`, {content: content, date: new Date()})
      .map((res) => res.json())
      .subscribe()
  }

}
