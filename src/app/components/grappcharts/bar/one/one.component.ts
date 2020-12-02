import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
// import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  
  public barChartLabels: Label[] = ['Amenaza 1', 'Amenaza 2', 'Amenaza 3', 'Amenaza 4', 'Amenaza 5'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  // public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [5, 1, 17, 3, 8], label: 'Lluvia' },
    { data: [6, 4, 8, 11, 6], label: 'Sequias' },
    { data: [11, 5, 9, 4, 6], label: 'Inundación' },
    { data: [7, 7, 7, 5, 8], label: 'Helada y Granizada' },
    { data: [3, 6, 9, 12, 4], label: 'Golpe de Calor' }
  ];

  constructor() { }

  ngOnInit() {
  }

}

