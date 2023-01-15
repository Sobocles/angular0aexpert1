import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent{

  

  @Input() nuevo : Personaje = { //interface de tipo personaje
             nombre: '',
             poder: 0,
  }

  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }
    console.log(this.nuevo);
    this.onNuevoPersonaje.emit(this.nuevo);

    //se ingresa lo que ingresa el cliente en el arreglo
    this.nuevo = { //se vacia la interfaz una vez se pulsa agregar
      nombre: '',
      poder: 0,
    }
   
  }

}
