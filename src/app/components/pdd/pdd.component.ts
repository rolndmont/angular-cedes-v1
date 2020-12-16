import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdd',
  templateUrl: './pdd.component.html',
  styleUrls: ['./pdd.component.css']
})
export class PDDComponent implements OnInit {

  // @Input() url: string = "../assets/pdf/Marco_Juridico.pdf";



  @Input() url: string;
  totalPages: any;
  isLoaded: boolean= false;
  page: any;
  zoom_in: number = 1;
  constructor() { 

    this.url = "../assets/pdf/cuestionario1.pdf";

  }

  
  ngOnInit(): void {
  }



  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
  }

  mundo(nameF: string) {
    console.log( nameF);
    
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
  
}0
