import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
// import * as pluginAnnotations from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {
  @Input() lineChartData: ChartDataSets[] = [];
  @Input() lineChartLabels: Label[] =[];
  @Input() texto: ChartOptions []=[];
  // public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
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

  

  // public nuevosLabes : Label[] = ['ene-82','feb-82','mar-82','abr-82','may-82','jun-82','jul-82','ago-82','sep-82','oct-82','nov-82','dic-82','ene-83','feb-83','mar-83','abr-83','may-83','jun-83','jul-83','ago-83','sep-83','oct-83','nov-83','dic-83' ];
  constructor() { 

    // console.log("ChartOption: ",this.lineChartOptions.title?.text);
    // this.lineChartOptions.title?.text = this.titulo;
    // this.lineChartOptions.title?.text=this.titulo;
    // console.log(this.lineChartData);

  }

  ngOnInit(): void {
    // console.log(this.texto);
    this.lineChartOptions.title?.text = this.texto;
  }

}
