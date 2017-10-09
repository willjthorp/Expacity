import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { CityService } from '../../services/city.service'

import { GraphData } from '../../classes/graph-data'

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
  selectedCities = [];
  bothSelected: boolean = false;
  cityIndices = [];


  autoCompleteCallback1(selectedData:any) {
    this.selectedCities.push(selectedData.name);
    this.getIndices(selectedData.name);
  }

  getIndices(selectedCity) {
    this.cities.getIndices(selectedCity)
      .subscribe((indices) => {
        this.cityIndices.push(indices);
        this.setData();
        // this.qualityOfLifeIndex = indices.quality_of_life_index.toFixed(2);
        // this.costOfLivingIndex = indices.cpi_index.toFixed(2);
        // this.propPriceIncomeRatio = indices.property_price_to_income_ratio.toFixed(2);
        // this.country = indices.name.split(',')[1].trim()
      });
  }

  public userSettings2: any = {
    geoTypes: ['(cities)'],
    inputPlaceholderText: 'Search for a city...',
    showSearchButton: false,
  };

  setData() {
    this.barChartData.push({data: []});
    this.selectedCities.forEach((city, index) => {
      this.barChartData[index].label = city
      this.cityIndices.forEach((indices) => {
        if (this.barChartData[index].data.length === 0 && indices.name.indexOf(city) !== -1) {
          this.barChartData[index].data.push(indices.health_care_index);
          this.barChartData[index].data.push(indices.crime_index);
          this.barChartData[index].data.push(indices.traffic_time_index);
        }
      })
    })
    this.showGraph = true;
    console.log('DATA', this.barChartData)
  }

  constructor(private route: ActivatedRoute, private cities: CityService) { }

  ngOnInit() {
    console.log(this.selectedCities);
  }

  public barChartOptions:any = {
    scaleShowVerticalLines: true,
    responsive: true,
  };
  public barChartLabels:string[] = ['Health Care', 'Crime', 'Traffic Time'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData = [];

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
