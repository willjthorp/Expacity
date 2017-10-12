import { Component, OnInit } from '@angular/core';

import { CityService } from '../../services/city.service'

@Component({
  selector: 'app-pages-toptens',
  templateUrl: './pages-about.component.html',
  styleUrls: ['./pages-about.component.css']
})
export class PagesAboutComponent implements OnInit {

  constructor(private cities: CityService) { }


  ngOnInit() {
  }


  categories =  ['Health Care', 'Crime', 'Traffic', 'Living Costs', 'Pollution', 'Traffic', 'Quality of Life', 'Groceries', 'Safety', 'Rent', 'Restaurant Price', 'Property Price / Income Ratio']

}
