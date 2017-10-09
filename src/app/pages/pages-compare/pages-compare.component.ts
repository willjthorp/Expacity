import { Component, OnInit } from '@angular/core';

import { CityService } from '../../services/city.service'

@Component({
  selector: 'app-pages-compare',
  templateUrl: './pages-compare.component.html',
  styleUrls: ['./pages-compare.component.css']
})
export class PagesCompareComponent implements OnInit {

  selectedCities: string[] = [];
  bothSelected: boolean = false;
  cityIndices: Object[] = [];

  constructor(private cities: CityService) { }

  ngOnInit() {
  }

}
