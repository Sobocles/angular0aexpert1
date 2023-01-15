import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'goku',
      poder: 15000
    },
    {
      nombre: 'vegeta',
      poder: 7500
    }
  ];

    nuevo: Personaje = { //Este nuevo personaje se envia por al @Input que esta en el componente agregar
    nombre: 'Maestro Roshi',
    poder: 1000
    }


  



}
