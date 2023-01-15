import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent{

    @Input() personajes: Personaje[] = [];

    @Input() nuevo : Personaje = { //interface de tipo personaje
             nombre: '',
             poder: 0,
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
    console.log(this.personajes);
  }

}
