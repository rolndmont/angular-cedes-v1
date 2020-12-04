import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from "@angular/router";
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { MunicipiosService } from "src/app/servicios/municipios.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content: string = 'Visitar Colegio de México';
  unam: string = 'Visitar Universidad Nacional Autonoma de México';
  ibero: string = 'Visitar Universidad IberoAmericana de Puebla';
  buap: string = 'Visitar Benemerita Universidad Autonoma de Puebla';
  modalRef!: BsModalRef;
  message!: string;
  image: any [] = [];

  imagenes = [
    {
      "id": 1,
      "imagen": "assets/img/uno.jpeg",
      "desc": "Taller realizado",
      "titulo": "Cambio climático"
    },
    {
      "id": 2,
      "imagen": "assets/img/dos.jpeg",
      "desc": "Taller realizado",
      "titulo": "Cambio climático"
    },
    {
      "id": 3,
      "imagen": "assets/img/tres.jpeg",
      "desc": "Taller realizado",
      "titulo": "Cambio climático"
    },
    {
      "id": 4,
      "imagen": "assets/img/cuatro.jpeg",
      "desc": "Taller realizado",
      "titulo": "Cambio climático"
    },
    {
      "id": 5,
      "imagen": "assets/img/cinco.jpeg",
      "desc": "Taller realizado",
      "titulo": "Cambio climático"
    },
    {
      "id": 6,
      "imagen": "assets/img/seis.jpeg",
      "desc": "Taller realizado",
      "titulo": "Cambio climático"
    },
    {
      "id": 7,
      "imagen": "assets/img/siete.jpeg",
      "desc": "Taller realizado",
      "titulo": "Cambio climático"
    },
    {
      "id": 8,
      "imagen": "assets/img/ocho.jpeg",
      "desc": "Taller realizado",
      "titulo": "Cambio climático"
    },
    {
      "id": 9,
      "imagen": "assets/img/nueve.jpeg",
      "desc": "Taller realizado",
      "titulo": "Cambio climático"
    }
  ];

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  
  constructor(private router:Router, private modalService: BsModalService,private _municipioService: MunicipiosService) { }

  ngOnInit() {
    console.log(this.imagenes);
  }

  public cm(){
    console.log("Colegio de mexico");
    
  }
  public un(){
    console.log("UNAM");
  }
  public ib(){
    console.log("IBERO");
  }
  public bp(){
    console.log("BUAP");
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
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
