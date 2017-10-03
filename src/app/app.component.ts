import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';

  currentCity: string;

  onNotify(city:string):void {
    this.currentCity=city
  }
}
