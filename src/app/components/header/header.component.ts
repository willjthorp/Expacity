import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  currentCity: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  autoCompleteCallback1(selectedData:any) {
    this.currentCity = selectedData.name
    this.notify.emit(this.currentCity);
    this.router.navigate(['/cities', this.currentCity]);  // <!-- Programmatically navigate to home
  }

  public userSettings2: any = {
    geoTypes: ['(cities)'],
    inputPlaceholderText: 'Search for a city...'
  };

}
