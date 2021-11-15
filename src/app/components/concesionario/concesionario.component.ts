import { Component, OnInit } from '@angular/core';
import { Coche } from 'src/app/models/coche';

@Component({
  selector: 'app-concesionario',
  templateUrl: './concesionario.component.html',
  styleUrls: ['./concesionario.component.css']
})
export class ConcesionarioComponent implements OnInit {
  public coches: Array<Coche>;
  public mensaje!: string;

  seleccionarCochePadre(event: Coche): void {
    this.mensaje = "Coche seleccionado: " + event.marca + " " + event.modelo;
  }

  constructor() {
    this.coches = [
      new Coche("PONTIAC", "FIREBIRD", 0 , 220, 25, false),
      new Coche("FORD", "FOCUS", 0 , 235, 30, false),
      new Coche("MAZDA", "MAZDA 6", 0 , 210, 20, false)
    ]
  }

  ngOnInit(): void {
  }

}
