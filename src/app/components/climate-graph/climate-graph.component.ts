import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-climate-graph',
  templateUrl: './climate-graph.component.html',
  styleUrls: ['./climate-graph.component.css']
})
export class ClimateGraphComponent implements OnInit {

  @Input() climateInfo: any;

  avHighTemp = [];
  avLowTemp = [];
  maxLowTemp = [];

  constructor(private route: ActivatedRoute) { }


  // Extract relevant climate data from api data function
  getClimateData(data, variable) {
    for (var key in this.climateInfo) {
      var obj = this.climateInfo[key]
      for (var item in obj) {
        if (item === data) {
          variable.push(obj[item])
        }
      }
    }
  }


  // Listen to route changes and use function to set relevant data
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getClimateData('temp_high_avg', this.avHighTemp);
      this.getClimateData('temp_low_avg', this.avLowTemp);
      this.barChartData = [
        {data: this.avHighTemp, label: 'Avg High Temp (°C)', backgroundColor: 'rgba(161, 255, 206, 0.7)'},
        {data: this.avLowTemp, label: 'Avg Low Temp (°C)', backgroundColor: 'rgba(250, 255, 209, 0.7)'},
      ];
    });
  }


  // Chart JS settings
  public barChartOptions:any = {
    scaleShowVerticalLines: true,
    responsive: true,
  };
  public barChartLabels:string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Nov', 'Dec'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:Object[];


  public colors = [
        'rgba(161, 255, 206, 0.8)',
        'rgba(250, 255, 209, 0.8)',
  ];


}
