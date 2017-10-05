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

  getQuestion(id: string) {
    return this.http.get(`http://localhost:3000/question/questions/${id}`)
      .map((res) => res.json());
  }

  postQuestion(content: string, city: string) {
    console.log('BOOO', content, city)
    return this.http.post(`http://localhost:3000/question/questions`, {content: content, city: city, date: new Date()})
      .map((res) => res.json())
      .subscribe()
  }

}
