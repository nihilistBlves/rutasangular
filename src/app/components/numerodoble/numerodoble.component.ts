import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-numerodoble',
  templateUrl: './numerodoble.component.html',
  styleUrls: ['./numerodoble.component.css']
})
export class NumerodobleComponent implements OnInit {
  public numero: number = 0;

  //NECESITAMOS RECIBIR EL OBJETO ActivatedRoute PARA RECUPERAR PARAMETROS
  //EN ANGULAR, LOS OBJETOS INYECTADOS SE DENOMINAN CON GUION BAJO
  constructor(private _activeRoute: ActivatedRoute, private _router: Router) {

  }

  redirect(n: any): void {
    this._router.navigate(["/numerodoble", n]);
  }

  ngOnInit(): void {
    //AQUI ES DONDE SE RECUPERAN LOS PARAMETROS
    //SE UTILIZA UNA PROMESA LLAMADA subscribe
    //Y LA PROMESA TRAE Params CON LOS PARAMETROS POR SU name
    this._activeRoute.params.subscribe(( params: Params ) => {
      //PREGUNTAMOS SI EXISTE EL PARAMETRO
      if (params['numero'] != null) {
        //ASIGNAMOS LA PROPIEDAD
        this.numero = parseInt(params['numero'])
      }
    });
  }

}
