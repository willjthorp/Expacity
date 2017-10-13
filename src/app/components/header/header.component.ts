import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';

import { User } from '../../models/user.model'

import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  user: User;
  currentCity: string;
  subscriptions = [];
  toggle: boolean = false;

  constructor(private router: Router, private auth: AuthService) { }

  // Get the user on init and subscribe to changes
  ngOnInit() {
    this.user = this.auth.getUser();
    let subscription = this.auth.userChange$.subscribe((user) => {
      this.user = user
    });
    this.subscriptions.push(subscription);
  }

  // Logout the user
  logout() {
    this.auth.logout().subscribe(() => {
    });
    this.router.navigate(['/home'])
  }

  // Toggle the mobile view menu
  toggleMenu() {
    this.toggle=!this.toggle;
  }

  // Callback from city search bar
  autoCompleteCallback1(selectedData:any) {
    this.currentCity = selectedData.name
    this.notify.emit(this.currentCity);
    this.router.navigate(['/cities', this.currentCity]);
  }

  // Settings for city search bar
  public userSettings2: any = {
    geoTypes: ['(cities)'],
    inputPlaceholderText: 'Search for a city...',
    showCurrentLocation: false,
  };

}
