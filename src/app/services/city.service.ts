import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CityService {

  constructor(private http: Http) { }

  getIndices(city: string) {
    return this.http.get(`http://localhost:3000/cityapi/indices/${city}`)
      .map((res) => res.json())
  }

  getPhotoReference(city: string) {
    return this.http.get(`http://localhost:3000/cityapi/photoreference/${city}`)
      .map((res) => res.json())
  }

  getPhoto(photo: string) {
    return this.http.get(`http://localhost:3000/cityapi/photo/${photo}`)
      .map((res) => res.json())
  }

}
