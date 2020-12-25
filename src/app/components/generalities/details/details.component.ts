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

    console.log(this.municipioSeleccionado.grafica);
    
    console.log("Longitud del arreglo: ",this.municipioSeleccionado.grafica.length);
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
