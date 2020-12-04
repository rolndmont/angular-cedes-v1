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

  municipioSeleccionado: Municipio = {
    idR: 0,
    id: 0,
    nombre: "",
    imagen: "",
    descripcion: "",
    extension: "",
    clima: "",
    recursos: "",
    principales: ""
  }



  constructor(private router: Router, private activatedRouter: ActivatedRoute, private _municipioservice: MunicipiosService) {


    this.activatedRouter.params.subscribe(params => {
      this.municipioSeleccionado = this._municipioservice.getOneMunicipio(params.idR, params.id);
    });
  }

  ngOnInit() {
  }


  back() {
    this.router.navigate(['/generalities']);
  }
}
