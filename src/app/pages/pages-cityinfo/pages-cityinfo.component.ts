import { Component, OnInit, Input } from '@angular/core';

import { CityService } from '../../services/city.service'

import { QuestionService } from '../../services/question.service'

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pages-cityinfo',
  templateUrl: './pages-cityinfo.component.html',
  styleUrls: ['./pages-cityinfo.component.css'],
})
export class PagesCityinfoComponent implements OnInit {

  @Input() city: string;

  country: string

  questionList: any;

  cityIndices: Object;
  photoReference: string;
  photoURL: string;
  qualityOfLifeIndex: number;
  costOfLivingIndex: number;
  propPriceIncomeRatio: number
  currency: string;
  climateInfo: Object;
  prices: any;
  showInput = false;

  priceItems = [
    {
      id: 1,
      name: 'Restaurant Meal',
      photo: '/assets/images/priceIcons/Meal.png',
      price: 0
    },
    {
      id: 4,
      name: '0.5l Beer, restaurant',
      photo: '/assets/images/priceIcons/beer.png',
      price: 0
    },
    {
      id: 8,
      name: '1l Milk',
      photo: '/assets/images/priceIcons/milk.png',
      price: 0
    },
    {
      id: 9,
      name: '500g Loaf of Bread',
      photo: '/assets/images/priceIcons/bread.png',
      price: 0
    },
    {
      id: 11,
      name: '12 Eggs',
      photo: '/assets/images/priceIcons/boiled.png',
      price: 0
    },
    {
      id: 12,
      name: '1kg Local Cheese',
      photo: '/assets/images/priceIcons/cheese.png',
      price: 0
    },
    {
      id: 112,
      name: '1kg Potatoes',
      photo: '/assets/images/priceIcons/potato.png',
      price: 0
    },
    {
      id: 14,
      name: 'Bottle of Wine',
      photo: '/assets/images/priceIcons/wine.png',
      price: 0
    },
    {
      id: 17,
      name: 'Pack of Cigarettes',
      photo: '/assets/images/priceIcons/smoking.png',
      price: 0
    },
    {
      id: 18,
      name: 'Ticket, One-way',
      photo: '/assets/images/priceIcons/school-bus.png',
      price: 0
    },
    {
      id: 20,
      name: 'Monthly Transport Pass',
      photo: '/assets/images/priceIcons/tickets.png',
      price: 0
    },
    {
      id: 24,
      name: '1L Gasoline',
      photo: '/assets/images/priceIcons/gas-station.png',
      price: 0
    },
    {
      id: 26,
      name: '1 Bed Apartment Rent',
      photo: '/assets/images/priceIcons/apartments.png',
      price: 0
    },
    {
      id: 40,
      name: 'Gym Membership',
      photo: '/assets/images/priceIcons/dumbbell.png',
      price: 0
    },
    {
      id: 44,
      name: 'Cinema ticket',
      photo: '/assets/images/priceIcons/popcorn.png',
      price: 0
    },
    {
      id: 108,
      name: '1km Taxi Fare',
      photo: '/assets/images/priceIcons/taxi.png',
      price: 0
    },
  ]

  constructor(private cities: CityService, private route: ActivatedRoute, private questionService: QuestionService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.city = params['id']
      this.getIndices();
      this.getPhotoReference();
      this.getPrices();
      this.getClimate();
      this.questionService.getCityQuestions(this.city)
        .subscribe((questions) => {
          this.questionList = questions
          if (this.questionList.length > 4) {
            this.questionList.length = 4
          }
        });
    });
  }

  getIndices() {
    this.cities.getIndices(this.city)
      .subscribe((indices) => {
        this.cityIndices = indices;
        if (indices.quality_of_life_index) {
          this.qualityOfLifeIndex = indices.quality_of_life_index.toFixed(2);
        }
        if (indices.cpi_index) {
          this.costOfLivingIndex = indices.cpi_index.toFixed(2);
        }
        if (indices.property_price_to_income_ratio) {
          this.propPriceIncomeRatio = indices.property_price_to_income_ratio.toFixed(2);
        }
        this.country = indices.name.split(',')[1].trim()
      });
  }

  getPhotoReference() {
    this.cities.getPhotoReference(this.city)
      .subscribe((info) => {
        this.photoReference = info.results[0] && info.results[0].photos[0].photo_reference;
        this.getPhoto()
      });
  }

  getPhoto() {
    this.cities.getPhoto(this.photoReference)
      .subscribe((photo) => {
        this.photoURL = photo.location
      });
  }

  getPrices() {
    this.cities.getPrices(this.city)
      .subscribe((priceinfo) => {
        this.prices = priceinfo.prices
        for (let i=0; i < this.prices.length; i++) {
          for (let j=0; j < this.priceItems.length; j++) {
            if (this.prices[i].item_id == this.priceItems[j].id) {
              this.priceItems[j].price = this.prices[i].average_price.toFixed(2)
            }
          }
        }
        this.currency = priceinfo.currency;
      });
  }

  getClimate() {
    this.cities.getClimate(this.city)
      .subscribe((climate) => {
        this.climateInfo = climate.months;
      });
  }

  getCityQuestions() {
    this.questionService.getCityQuestions(this.city)
      .subscribe((questions) => {
        this.questionList = questions;
      });
  }

  receiveNewQuestion(question) {
    question.justAdded = true;
    this.questionList.unshift(question);
    setTimeout(() => question.justAdded = false, 500);
  }

}
