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

  constructor(private route: ActivatedRoute) { }

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

  public barChartOptions:any = {
    scaleShowVerticalLines: true,
    responsive: true,
  };
  public barChartLabels:string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Nov', 'Dec'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:Object[];

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  private colors = [
        'rgba(161, 255, 206, 0.8)',
        'rgba(250, 255, 209, 0.8)',
  ];


}
