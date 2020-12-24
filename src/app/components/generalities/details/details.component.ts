import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Municipio } from "src/app/model/municipio";
import { MunicipiosService } from 'src/app/servicios/municipios.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  municipioSeleccionado: any = {
    idR: 0,
    id: 0,
    nombre: "",
    imagen: "",
    descripcion: "",
    extension: "",
    clima: "",
    recursos: "",
    principales: "",
    grafica:[{
      texto:""}
    ],
  }

  // municipioSeleccionado: any[] =[];

  public graficaTehua: any[] = [];
  public graficaLinea: any[] = [];
  public Linea: any[] = [];

  constructor(private router: Router, private activatedRouter: ActivatedRoute, private _municipioservice: MunicipiosService) {


    this.activatedRouter.params.subscribe(params => {
      this.municipioSeleccionado = this._municipioservice.getOneMunicipio(params.idR, params.id);
    });

    // if (this.municipioSeleccionado.nombre == "Tehuacán") {
    //   console.log("Tehuacan");
    // }
    // if (this.municipioSeleccionado.nombre == "Chignahuapan") {
    //   console.log("Chignahuapan");
    // }


    // Solicitar graficas
    // this.graficaTehua = this._municipioservice.getGraficaTehuaca();
    // console.log("details Objeto: ", this.municipioSeleccionado.grafica);
    // console.log("details Objeto: ", this.municipioSeleccionado.grafica[0].text[0]);
    console.log(this.municipioSeleccionado.grafica[0].texto);

    // for (const text in object) {
    //   if (Object.prototype.hasOwnProperty.call(object, text)) {
    //     const element = object[text];
        
    //   }
    // }
    // for (const idT in this.municipioSeleccionado) {
    //   if (Object.prototype.hasOwnProperty.call(this.municipioSeleccionado, idT)) {
    //     const linea = this.municipioSeleccionado[idT];
    //     const element = this.municipioSeleccionado[idT].idT;
    //     console.log("details Graficas: ", element);
    //     if (element == "2") {
    //       this.graficaLinea.push(linea);
    //       console.log("details linea: ", linea);
    //     }
    //   }
    // }

    // for (const data in this.graficaLinea) {
    //   if (Object.prototype.hasOwnProperty.call(this.graficaLinea, data)) {
    //     const element = this.graficaLinea[data];
    //     this.Linea = this.graficaLinea[data];
    //   }
    // }
    // console.log("details linea: ", this.graficaLinea);
    // console.log("grafica 1: ", this.graficaLinea[1].chartData);

  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    
    
  }

  back() {
    this.router.navigate(['/generalities']);
  }
}
