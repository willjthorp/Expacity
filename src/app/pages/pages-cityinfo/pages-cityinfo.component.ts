import { Component, OnInit, Input } from '@angular/core';

import { CityService } from '../../services/city.service'

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pages-cityinfo',
  templateUrl: './pages-cityinfo.component.html',
  styleUrls: ['./pages-cityinfo.component.css']
})
export class PagesCityinfoComponent implements OnInit {

  @Input() city:string;
  
  country:string

  cityIndices: Object;
  photoReference: string;
  photoURL: string;
  qualityOfLifeIndex: number;
  costOfLivingIndex: number;
  propPriceIncomeRatio: number
  rentPrice: number;
  currency: string;
  climateInfo: Object;

  constructor(private cities: CityService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.city = params['id']
      this.getIndices()
      this.getPhotoReference()
      this.getPrices()
      this.getClimate()
    });
  }

  getIndices() {
    this.cities.getIndices(this.city)
      .subscribe((indices) => {
        this.cityIndices = indices;
        this.qualityOfLifeIndex = indices.quality_of_life_index.toFixed(2);
        this.costOfLivingIndex = indices.cpi_index.toFixed(2);
        this.propPriceIncomeRatio = indices.property_price_to_income_ratio.toFixed(2);
        this.country = indices.name.split(',')[1].trim()
        return this.cityIndices
      });
  }

  getPhotoReference() {
    this.cities.getPhotoReference(this.city)
    .subscribe((info) => {
        console.log(info)
        this.photoReference = info.results[0].photos[0].photo_reference;
        console.log(this.photoReference)
        this.getPhoto()
        // return this.photoReference
      });
  }

  getPhoto() {
    this.cities.getPhoto(this.photoReference)
    .subscribe((photo) => {
        console.log(photo)
        this.photoURL = photo.location
      });
  }

  getPrices() {
    this.cities.getPrices(this.city)
      .subscribe((priceinfo) => {
        this.rentPrice = priceinfo.prices.filter(function(obj) {
              return obj.item_id === 26;
            })[0].average_price.toFixed(0);
        this.currency = priceinfo.currency;
      });
  }

  getClimate() {
    this.cities.getClimate(this.city)
      .subscribe((climate) => {
        this.climateInfo = climate;
        console.log(this.climateInfo);
      });
  }

}
