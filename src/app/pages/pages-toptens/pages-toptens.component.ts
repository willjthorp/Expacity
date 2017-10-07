import { Component, OnInit } from '@angular/core';

import { CityService } from '../../services/city.service'

@Component({
  selector: 'app-pages-toptens',
  templateUrl: './pages-toptens.component.html',
  styleUrls: ['./pages-toptens.component.css']
})
export class PagesToptensComponent implements OnInit {

  constructor(private cities: CityService) { }

  cityList: any;
  allCityIndices: any;

  ngOnInit() {
    this.getCities()
  }

  getCities() {
    this.cities.getCities()
      .subscribe((cities) => {
        this.cityList = cities;
        // this.getAllIndices();
      });
  }

  // getAllIndices() {
  //   for (let i=0; i < this.cityList.cities.length; i++) {
  //     this.cities.getIndices(this.cityList[i].city)
  //     .subscribe((indices) => {
  //       this.allCityIndices.push(indices);
  //     })
  //   }
  // }

  categories =  ['Health Care', 'Crime', 'Traffic', 'Living Costs', 'Pollution', 'Traffic', 'Quality of Life', 'Groceries', 'Safety', 'Rent', 'Restaurant Price', 'Property Price / Income Ratio']

}
