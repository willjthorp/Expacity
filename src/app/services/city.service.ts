import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

const baseUrl = environment.apiUrl;

@Injectable()
export class CityService {

  constructor(private http: Http) { }

  getCities() {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(baseUrl + `/cityapi/cities`, options)
      .map((res) => res.json())
  }

  getIndices(city: string) {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(baseUrl + `/cityapi/indices/${city}`, options)
      .map((res) => res.json())
  }

  getPhotoReference(city: string) {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(baseUrl + `/cityapi/photoreference/${city}`, options)
      .map((res) => res.json())
  }

  getPhoto(photo: string) {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(baseUrl + `/cityapi/photo/${photo}`, options)
      .map((res) => res.json())
  }

  getPrices(city: string) {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(baseUrl + `/cityapi/prices/${city}`, options)
      .map((res) => res.json())
  }

  getClimate(city: string) {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(baseUrl + `/cityapi/city_climate/${city}`, options)
      .map((res) => res.json())
  }

}
