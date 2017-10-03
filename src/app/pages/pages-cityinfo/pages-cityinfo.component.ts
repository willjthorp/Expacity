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

  constructor(private cities: CityService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.city = params['id']
      this.getIndices()
      this.getPhotoReference()
    });
  }

  getIndices() {
    this.cities.getIndices(this.city)
      .subscribe((indices) => {
        this.cityIndices = indices;
        console.log('country:', this.country)
        this.country = indices.name.split(',')[1].trim()
        console.log('country:', this.country)
        return this.cityIndices
      });
  }

  getPhotoReference() {
    this.cities.getPhotoReference(this.city)
    .subscribe((info) => {
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


}
