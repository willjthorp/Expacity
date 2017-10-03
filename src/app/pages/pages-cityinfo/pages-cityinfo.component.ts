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

  cityIndices: Object;

  constructor(private cities: CityService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.city = params['id']
      this.getIndices()
    });
  }

  getIndices() {
    this.cities.getIndices(this.city)
      .subscribe((indices) => {
        this.cityIndices = indices;
        console.log(this.cityIndices)
        return this.cityIndices
      });
  }

}
