import { Injectable } from '@angular/core';

@Injectable()
export class CityTrailService {

  cities = [];

  constructor() { }

  pushCity(city) {
    if (this.cities.length && !this.cities[this.cities.length - 1]) {
      this.cities.pop();
    }
    if (this.cities.length && this.cities[this.cities.length - 1] !== city) {
      this.cities.push(city);
    }
  }

  clearCity() {
    if (this.cities.length && !this.cities[this.cities.length - 1]) {
      this.cities.push(null);
    }
  }

  getLastCity() {
    return this.cities.length ? this.cities[this.cities.length - 1] : null;
  }

}
