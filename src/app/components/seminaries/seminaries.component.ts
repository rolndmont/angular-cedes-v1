import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Files } from 'src/app/model/municipio';
import { MunicipiosService } from 'src/app/servicios/municipios.service';

@Component({
  selector: 'app-seminaries',
  templateUrl: './seminaries.component.html',
  styleUrls: ['./seminaries.component.css']
})
export class SeminariesComponent implements OnInit {

   // declaración de varibales
   Files: Files[] = [];
   FileQ: Files [] = [];

  constructor( private router: Router, private activatedRouter: ActivatedRoute, private _municipioservice: MunicipiosService ) {
    
   }

  ngOnInit(): void {
    console.log("Inciando la carga de los pdf");
    this.Files = this._municipioservice.getFilesPDD();
    console.log(this.Files);
    let k = 0;
    for (let i = 5; i < this.Files.length; i++) {
      this.FileQ[k] = this.Files[i];
      k++;
    }
    console.log(this.FileQ);
    
    k = 0;
  }


}
