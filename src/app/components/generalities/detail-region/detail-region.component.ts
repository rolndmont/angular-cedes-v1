import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Regiones } from 'src/app/model/municipio';
import { MunicipiosService } from 'src/app/servicios/municipios.service';

@Component({
  selector: 'app-detail-region',
  templateUrl: './detail-region.component.html',
  styleUrls: ['./detail-region.component.css']
})
export class DetailRegionComponent implements OnInit {

  // declaración de varibales
  identificador!: number;
  public Region: Regiones = {
    id: 1,
    titulo: "",
    imagen: "",
    descripcion: "",
    clima:""
  };

  constructor(private router: Router, private activatedRouter: ActivatedRoute, private _municipioservice: MunicipiosService) {

    this.activatedRouter.params.subscribe(params => {
      this.Region = this._municipioservice.getOneRegion(params.id);
      console.log("identificador de Region recibida: " + this.Region.titulo);
    });

  }

  ngOnInit(): void {
  }

  back() {
    console.log("regresar");
    this.router.navigate(['/generalities']);
  }

}
