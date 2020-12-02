import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-investigation',
  templateUrl: './investigation.component.html',
  styleUrls: ['./investigation.component.css']
})
export class InvestigationComponent implements OnInit {
  files = [
    { "id": 1, "name": "CEMDA", "description": "CEMDA-Mapeo de financiamiento climático en México", "url": "../assets/pdf/CEMDA.pdf", "image": "../assets/img/cemda.PNG" },
    { "id": 2, "name": "guia", "description": "Guia de financiamiento climático para entidades federativas", "url": "../assets/pdf/guia.pdf", "image": "../assets/img/guia.png" },
    { "id": 3, "name": "leyCambio", "description": "Ley de Cambio Climatico del Estado de Puebla", "url": "../assets/pdf/leyCambio.pdf", "image": "../assets/img/leyCambio.jpg" },
    { "id": 4, "name": "tmf", "description": "Financiamiento internacional para el cambio climático en México", "url": "../assets/pdf/tmf.pdf", "image": "../assets/img/financiamiento.jpg" }
  ];

  cambio: Boolean = false;
  modalRef!: BsModalRef;
  message!: string;
  url = "../assets/pdf/CEMDA.pdf";
  page: number = 1;
  totalPages!: number;
  isLoaded: boolean = false;
  zoom_in: number = 1;



  constructor(private modalService: BsModalService) { }

  ngOnInit() {
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
