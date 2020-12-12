import { Component, OnInit } from '@angular/core';
import { MunicipiosService } from "src/app/servicios/municipios.service";
import { Municipio } from "src/app/model/municipio";
import { Router } from "@angular/router";

@Component({
  selector: 'app-generalities',
  templateUrl: './generalities.component.html',
  styleUrls: ['./generalities.component.css']
})

export class GeneralitiesComponent implements OnInit {

  SierraN: Municipio[] = [];
  SieraNor: Municipio[] = [];
  Angel: Municipio[] = [];
  Tehua: Municipio[] = [];
  Mixteca: Municipio[] = [];

  seleccion: boolean = false;
  idRegion!: number;
  idMun!: number;

  constructor(private _municipioService: MunicipiosService, private router: Router) {

  }

  ngOnInit() {
    this.SierraN = this._municipioService.getSierraNorte();
    this.SieraNor = this._municipioService.getSNOR();
    this.Angel = this._municipioService.getAng();
    this.Tehua = this._municipioService.getT();
    this.Mixteca = this._municipioService.getMIX();

    // console.log(this.SierraN);
    // console.log(this.SieraNor);
    // console.log(this.Mixteca);
  }
  
  viewRegion( identiRegion: number ){
    let id = identiRegion;

    if ( id == 1) {
      console.log("Region seleccionado Uno");
      this.router.navigate(['/generalities/detailRegion', id]);
    }
    if ( id == 2) {
      console.log("Region seleccionado 2");
      this.router.navigate(['/generalities/detailRegion', id]);
    }
    if( id == 4){
      console.log("Region seleccionado 4");
      this.router.navigate(['/generalities/detailRegion', id]);
    }
    if( id == 6){
      console.log("Region seleccionado 6");
      this.router.navigate(['/generalities/detailRegion', id]);
    }
    if (id == 7){
      console.log("Region seleccionado 7");
      this.router.navigate(['/generalities/detailRegion', id]);
    }
       
  }


  selectReg1(obj: Municipio) {
    this.idRegion = obj.idR;
    this.idMun = obj.id;
    console.log("Objeto: " + obj.idR, obj.id);
    this.router.navigate(['/generalities/details', this.idRegion, this.idMun]);
  }
  selectReg2(obj: Municipio) {
    this.idRegion = obj.idR;
    this.idMun = obj.id;
    // console.log( "Objeto: "+objeto.nombre);
    this.router.navigate(['/generalities/details', this.idRegion, this.idMun]);
  }
  selectReg3(obj: Municipio) {
    this.idRegion = obj.idR;
    this.idMun = obj.id;
    // console.log( "Objeto: "+objeto.nombre);
    this.router.navigate(['/generalities/details', this.idRegion, this.idMun]);
  }
  selectReg4(obj: Municipio) {
    this.idRegion = obj.idR;
    this.idMun = obj.id;
    // console.log( "Objeto: "+objeto.nombre);
    this.router.navigate(['/generalities/details', this.idRegion, this.idMun]);
  }
  selectReg5(obj: Municipio) {
    this.idRegion = obj.idR;
    this.idMun = obj.id;
    // console.log( "Objeto: "+objeto.nombre);
    this.router.navigate(['/generalities/details', this.idRegion, this.idMun]);
  }

}