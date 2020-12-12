import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
// import * as pluginAnnotations from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    { data: [0,18,23,11,54,110.5,13,3,5.4,28.8,15,2.5,2,32.5,6,4,6.5,114.9,109.6,11.4,20.2,0,25.6,5], label: 'Mensual' },
    { data: [8.2,7.5,7.7,20.3,63.6,109.2,71.6,70.8,77.4,37,9.3,2.5,8.2,7.5,7.7,20.3,63.6,109.2,71.6,70.8,77.4,37,9.3,2.5], label: 'Normal', yAxisID: 'y-axis-1' }
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    maintainAspectRatio: false,
      spanGaps: false,
      title:{
        display: true,
        text: 'Precipitación Normal y Mensual registrada TEHUACÁN Fenómeno del Niño 1982-1983'
      },
			elements: {
				line: {
					tension: 0.000001
				}
			},
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
          scaleLabel: {
            display: true,
            labelString: 'Preocipitacion mm'
         }
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'y-axis-0'}
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(4, 149, 201,0.2)',
      borderColor: 'rgba(4, 149, 201,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // red
      backgroundColor: 'rgba(214, 132, 9,0.2)',
      borderColor: 'rgba(214, 132, 9,0.8)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';


  public nuevosLabes : Label[] = ['ene-82','feb-82','mar-82','abr-82','may-82','jun-82','jul-82','ago-82','sep-82','oct-82','nov-82','dic-82','ene-83','feb-83','mar-83','abr-83','may-83','jun-83','jul-83','ago-83','sep-83','oct-83','nov-83','dic-83' ];
  constructor() { 

  }

  ngOnInit(): void {
  }

}
