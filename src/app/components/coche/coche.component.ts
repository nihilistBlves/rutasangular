import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Coche } from 'src/app/models/coche';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css']
})
export class CocheComponent implements OnInit {
  @Input() car!: Coche;
  public mensaje!: string;
  @Output() seleccionarCoche = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.comprobarEstado();
  }

  //METODO PARA SELECCIONAR UN ELEMENTO Y LLAMAR AL PADRE
  seleccionarCocheHijo(): void {
    this.seleccionarCoche.emit(this.car);
  }

  //METODO PARA COMPROBAR EL ESTADO Y LANZAR MENSAJES
  comprobarEstado(): boolean {
    if (this.car.estado == false) {
      this.mensaje = "El coche está apagado";
      this.car.v = 0;
      return false;
    } else {
      this.mensaje = "El coche está encendido";
      return true;
    }
  }

  alternarEstado(): void {
    this.car.estado = !this.car.estado;
    this.comprobarEstado();
  }

  acelerar(): void {
    if(this.comprobarEstado() == false) {
      alert("El coche no está encendido");
    } else {
      this.car.v = this.car.v + this.car.a;
      if (this.car.v > this.car.vMax) {
        this.car.v = this.car.vMax;
      }
    }
  }

}
