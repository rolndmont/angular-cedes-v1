import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
// import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  @Input()  barChartData: ChartDataSets[] = [];


  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  
  @Input() barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData1: ChartDataSets[] = [];
  public arreglo:any[] = [];
  // public barChartPlugins = [pluginDataLabels];

  // public barChartData: ChartDataSets[] = [
  //   { data: [5, 1, 17, 3, 8], label: 'Lluvia' },
  //   { data: [6, 4, 8, 11, 6], label: 'Sequias' },
  //   { data: [11, 5, 9, 4, 6], label: 'Inundación' },
  //   { data: [7, 7, 7, 5, 8], label: 'Helada y Granizada' },
  //   { data: [3, 6, 9, 12, 4], label: 'Golpe de Calor' }
  // ];

  // public barChartData: ChartDataSets[] = [];

  constructor() { }

  ngOnInit() {
    // // this.barChartLabels.push(this.barChartData[0].bChartLab);
    // this.barChartLabels 
    // this.barChartData.push(this.barChartData.chartData);
  }

}

