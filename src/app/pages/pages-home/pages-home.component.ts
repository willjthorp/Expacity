import { Component, OnInit } from '@angular/core';

import { QuestionService } from '../../services/question.service'

@Component({
  selector: 'app-pages-home',
  templateUrl: './pages-home.component.html',
  styleUrls: ['./pages-home.component.css']
})
export class PagesHomeComponent implements OnInit {

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.getCityQuestions();
  }

  questionList: any;

  getCityQuestions() {
    this.questionService.getQuestions()
      .subscribe((questions) => {
        this.questionList = questions;
        this.questionList.filter((question) => {
          question = new Date(question.date);
          let oneWeekAgo = new Date();
          oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
          return question > oneWeekAgo;
        });
        this.questionList.sort((a, b) => {
          return b.stars - a.stars
        });
        this.questionList.length = 4;
      });
  }


    cityItems = [
      {
        name: 'Barcelona',
        photo: 'https://static.independent.co.uk/s3fs-public/styles/article_small/public/thumbnails/image/2017/05/15/11/sagrada-familia-barcelona.jpg',
      },
      {
        name: 'London',
        photo: 'https://cdn.londonandpartners.com/visit/general-london/areas/westminster-st-james/60262-640x360-parliament-bridge-640.jpg',
      },
      {
        name: 'New York',
        photo: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg',
      },
      {
        name: 'Vancouver',
        photo: 'http://res.cloudinary.com/simpleview/image/upload/v1486505969/clients/vancouverbc/Aerial_Sunset_Vancouver_d3_copy_1bb86ed0-1edc-4cda-841d-0b033ca0bb72.jpg',
      },
      {
        name: 'Berlin',
        photo: 'https://lonelyplanetwp.imgix.net/2015/12/brandenburg-gate-berlin-GettyRF-1500-cs.jpg?crop=entropy&fit=crop&h=421&sharp=10&vib=20&w=748',
      },
      {
        name: 'Stockholm',
        photo: 'https://d3n8a8pro7vhmx.cloudfront.net/icf/pages/279/attachments/original/1461166567/Stockholm-Sweden-Riddarholmen-ChurchBy-Unknown.jpg?1461166567',
      },
      {
        name: 'Bangkok',
        photo: 'http://static.asiawebdirect.com/m/bangkok/portals/bangkok-com/shared/teasersL/TOURS/discover-bangkok-in-2-days/teaserMultiLarge/imageHilight/bangkok-day-trip.jpg',
      },
      {
        name: 'Madrid',
        photo: 'https://www.thetimes.co.uk/travel/s3/growthtravel-prod/uploads/2017/03/Madrid_GettyImages.jpg',
      },
    ]

}
