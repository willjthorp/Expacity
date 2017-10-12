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

  toggleMenu() {
    this.toggle=!this.toggle;
  }

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.user = this.auth.getUser();

    let subscription = this.auth.userChange$.subscribe((user) => {
      this.user = user
    });

    this.subscriptions.push(subscription);
  }

  logout() {
    this.auth.logout().subscribe(() => {
    });
    this.router.navigate(['/home'])
  }

  autoCompleteCallback1(selectedData:any) {
    this.currentCity = selectedData.name
    this.notify.emit(this.currentCity);
    this.router.navigate(['/cities', this.currentCity]);
  }

  public userSettings2: any = {
    geoTypes: ['(cities)'],
    inputPlaceholderText: 'Search for a city...',
    showCurrentLocation: false,
  };

}
