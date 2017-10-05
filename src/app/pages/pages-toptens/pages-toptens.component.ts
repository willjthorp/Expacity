import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages-toptens',
  templateUrl: './pages-toptens.component.html',
  styleUrls: ['./pages-toptens.component.css']
})
export class PagesToptensComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  categories =  ['Health Care', 'Crime', 'Traffic', 'Living Costs', 'Pollution', 'Traffic', 'Quality of Life', 'Groceries', 'Safety', 'Rent', 'Restaurant Price', 'Property Price / Income Ratio']

}
