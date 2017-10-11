import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

const baseUrl = environment.apiUrl;

@Injectable()
export class CityService {

  constructor(private http: Http) { }

  getCities() {
    return this.http.get(baseUrl + `/cityapi/cities`)
      .map((res) => res.json())
  }

  getIndices(city: string) {
    return this.http.get(baseUrl + `/cityapi/indices/${city}`)
      .map((res) => res.json())
  }

  getPhotoReference(city: string) {
    return this.http.get(baseUrl + `/cityapi/photoreference/${city}`)
      .map((res) => res.json())
  }

  getPhoto(photo: string) {
    return this.http.get(baseUrl + `/cityapi/photo/${photo}`)
      .map((res) => res.json())
  }

  getPrices(city: string) {
    return this.http.get(baseUrl + `/cityapi/prices/${city}`)
      .map((res) => res.json())
  }

  getClimate(city: string) {
    return this.http.get(baseUrl + `/cityapi/city_climate/${city}`)
      .map((res) => res.json())
  }

}
