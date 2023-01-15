import { Component} from '@angular/core';

interface Personaje{
    nombre: string;
    poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
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


  nuevo : Personaje = { //interface de tipo personaje
    nombre: '',
    poder: 0,
  }

  cambiarNombre(event:any){
    console.log(event.target.value)
    
  }


  agregar(){
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }
    console.log(this.nuevo);

    this.personajes.push( this.nuevo ); //se ingresa lo que ingresa el cliente en el arreglo
    this.nuevo = { //se vacia la interfaz una vez se pulsa agregar
      nombre: '',
      poder: 0,
    }

  }



}
