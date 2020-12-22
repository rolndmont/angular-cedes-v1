import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChartDataSets } from 'chart.js';
import { Files } from 'src/app/model/municipio';
import { MunicipiosService } from 'src/app/servicios/municipios.service';

@Component({
  selector: 'app-seminaries',
  templateUrl: './seminaries.component.html',
  styleUrls: ['./seminaries.component.css']
})
export class SeminariesComponent implements OnInit {

  // declaración de varibales
  Files: Files[] = [];
  FileQ: Files[] = [];
  panelOpenState = false;


  cambio: boolean = false;
  message!: string;
  url = "../assets/pdf/cuestinario1.pdf";
  page: number = 1;
  totalPages!: number;
  isLoaded: boolean = false;
  zoom_in: number = 1;
  urlpdd: string = "";

  quiz1: string = "";
  quiz2: string = "";

  public barChartData: ChartDataSets[] = [];
  public barChartData2: ChartDataSets[] = [];
  // public barChartData3: ChartDataSets[] = [];
  public barChartData3: any[] = [];
  public barChartData4: ChartDataSets[] = [];
  public barChartData5: ChartDataSets[] = [];

  constructor(private router: Router, private activatedRouter: ActivatedRoute, private _municipioservice: MunicipiosService) {

  }

  ngOnInit(): void {
    console.log("Inciando la carga de los pdf");
    this.Files = this._municipioservice.getFilesPDD();
    console.log(this.Files);
    let k = 0;
    for (let i = 5; i < this.Files.length; i++) {
      this.FileQ[k] = this.Files[i];
      k++;
    }
    console.log(this.FileQ);


    this.barChartData = this._municipioservice.getBarChart();
    this.barChartData2 = this._municipioservice.getBarChart1();
    console.log(this.barChartData2);

    this.barChartData3.push(this._municipioservice.getTodoChart());
    console.log(this.barChartData3);
    let barChartData6:  ChartDataSets[]= [];

    for (const data in this.barChartData3) {
      if (Object.prototype.hasOwnProperty.call(this.barChartData3, data)) {
        this.barChartData5 = this.barChartData3[data];
        console.log("000");
        
      }
    }

    for (const data in this.barChartData5) {
      if (Object.prototype.hasOwnProperty.call(this.barChartData5, data)) {
        // this.barChartData4 = this.barChartData5[data];
        this.barChartData4.push(this.barChartData5[data]);
      }
    }

    // Object.keys(this.barChartData3).map((key) =>{
    //   barChartData6.push({[key]:this.barChartData3[key]})
    //   return barChartData6;
    // });

    console.log("Objeto= ", this.barChartData5);
    console.log("Array= ", this.barChartData4);
    
    
    

  }

  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
  }

  mundo(nameF: string) {
    console.log(nameF);

    this.url = nameF;
  }

  nextPage() {
    this.page++;
  }

  prevPage() {
    this.page--;
  }

  zoomIn() {
    this.zoom_in += 0.1;
  }

  zoomOut() {
    this.zoom_in -= 0.1;
  }

}
