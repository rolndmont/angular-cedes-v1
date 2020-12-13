import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdd',
  templateUrl: './pdd.component.html',
  styleUrls: ['./pdd.component.css']
})
export class PDDComponent implements OnInit {

  constructor() { }
  pdfSource = "../assets/pdf/Marco_Juridico.pdf";
  ngOnInit(): void {
  }

}
