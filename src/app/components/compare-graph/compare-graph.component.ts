import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { CityService } from '../../services/city.service'

@Component({
  selector: 'app-compare-graph',
  templateUrl: './compare-graph.component.html',
  styleUrls: ['./compare-graph.component.css']
})
export class CompareGraphComponent implements OnInit {

  avHighTemp = [];
  avLowTemp = [];
  maxLowTemp = [];
  cityLabel = {};
  showGraph = false;
  photoReference: string;
  selectedCities = [];
  bothSelected: boolean = false;
  cityIndices = [];
  tempData = [];
  selectedCategory = 'Health Care';
  indexName = 'health_care_index';

  // Callback from city selector
  autoCompleteCallback1(selectedData:any) {
    this.showGraph = false;
    if (selectedData.name && this.selectedCities && this.selectedCities.length < 6) {
      this.getPhotoReference(selectedData.name)
    }
  }

  getIndices(selectedCity) {
    this.cities.getIndices(selectedCity)
      .subscribe((indices) => {
        this.cityIndices.push(indices);
        this.addCity();
      });
  }

  selectCategory(name, indexName) {
    this.indexName = indexName;
    this.barChartLabels = [name + ''];
    this.setData(indexName)
  }

  addCity() {
    this.barChartData.push({data: []});
    this.barChartData[this.barChartData.length - 1].label = this.selectedCities[this.selectedCities.length - 1].name
    this.barChartData[this.barChartData.length - 1].backgroundColor = this.colors[this.selectedCities.length - 1];
    this.setData(this.indexName)
    this.showGraph = true;
  }

  setData(indexName) {
    this.barChartData.forEach((data, index) => {
      this.barChartData[index].data = [this.cityIndices[index][this.indexName]];
    });
  }

  getPhotoReference(city) {
    this.cities.getPhotoReference(city)
      .subscribe((info) => {
        this.photoReference = info.results[0] && info.results[0].photos[0].photo_reference;
        this.getPhoto(city)
      });
  }

  getPhoto(city) {
    this.cities.getPhoto(this.photoReference)
      .subscribe((photo) => {
        this.selectedCities.push({name: city, photoURL: photo.location});
        this.getIndices(city);
      });
  }

  constructor(private route: ActivatedRoute, private cities: CityService) { }

  ngOnInit() {
  }

  // Search box settings -------------------------------------------------------------------------------------------


    public userSettings2: any = {
      geoTypes: ['(cities)'],
      inputPlaceholderText: 'Search for a city to compare...',
      showSearchButton: false,
      showCurrentLocation: false,
    };


  // Graph settings -------------------------------------------------------------------------------------------


  public barChartOptions:any = {
    scaleShowVerticalLines: true,
    responsive: true,
    scales : {
       yAxes: [{
          ticks: {
             steps : 10,
             stepValue : 10,
             min: 0
           }
       }]
     }
  };
  public barChartLabels:string[] = ['Health Care'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData = [];

  // events
  public chartClicked(e:any):void {
  }

  public chartHovered(e:any):void {
  }

  colors = [
        'rgba(161, 255, 206, 0.7)',
        'rgba(250, 255, 209, 0.7)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(0, 255, 0, 0.2)',
        'rgba(102, 0, 204, 0.2)',
        'rgba(255, 128, 0, 0.2)'
  ];


  categories = [
    {
      name: 'Health Care',
      indexName: 'health_care_index'
    },
    {
      name: 'Crime',
      indexName: 'crime_index'
    },
    {
      name: 'Traffic time',
      indexName: 'cpi_index'
    },
    {
      name: 'Cost of living',
      indexName: 'cpi_index'
    },
    {
      name: 'Pollution',
      indexName: 'pollution_index'
    },
    {
      name: 'Traffic',
      indexName: 'traffic_index'
    },
    {
      name:  'Quality of Life',
      indexName: 'quality_of_life_index'
    },
    {
      name: 'Grocery costs',
      indexName: 'groceries_index'
    },
    {
      name: 'Safety',
      indexName: 'safety_index'
    },
    {
      name: 'Rent price',
      indexName: 'rent_index'
    },
    {
      name: 'Restaurant price',
      indexName: 'restaurant_price_index'
    },
    {
      name: 'Property price / income',
      indexName: 'property_price_to_income_ratio'
    }
  ];


  //Dropdown box settings ----------------------------------------------------------------------------------------

  items:Array<string> = ['Health Care', 'Crime', 'Traffic time', 'Cost of living', 'Pollution', 'Traffic', 'Quality of Life', 'Grocery costs', 'Safety', 'Rent price', 'Restaurant price', 'Property price / income']


}
