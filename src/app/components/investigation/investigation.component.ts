import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MunicipiosService } from "src/app/servicios/municipios.service";
import { Files } from "src/app/model/municipio";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-investigation',
  templateUrl: './investigation.component.html',
  styleUrls: ['./investigation.component.css']
})
export class InvestigationComponent implements OnInit {
  Files: Files[] = [];

  cambio: boolean = false;
  modalRef!: BsModalRef;
  message!: string;
  url = ""; //Archivo cargado por default
  page: number = 1;
  totalPages!: number;
  isLoaded: boolean = false;
  zoom_in: number = 1;



  constructor(private modalService: BsModalService, private _municipioService: MunicipiosService, private router: Router, private activatedRouter: ActivatedRoute) {

    this.activatedRouter.params.subscribe(params => {
      this.url = params.url;

      if (this.url == null) {
        this.url = "../assets/pdf/Marco_Juridico.pdf";
      }
    });


  }

  ngOnInit() {
    console.log("Inciando la carga de los pdf");
    this.Files = this._municipioService.getFilesPDD();
    console.log(this.Files);
    
  }

  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
  }

  mundo(nameF: string) {
    this.url = nameF;
  }

  nextPage() {
    this.page++;
  }

  prevPage() {
    this.page--;
  }

  zoomIn() {
    this.zoom_in += 0.5;
  }

  zoomOut() {
    this.zoom_in -= 0.5;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirm(): void {
    this.message = 'Confirmed!';
    this.modalRef.hide();
  }

  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }

}
