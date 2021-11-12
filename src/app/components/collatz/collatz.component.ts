import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-collatz',
  templateUrl: './collatz.component.html',
  styleUrls: ['./collatz.component.css']
})
export class CollatzComponent implements OnInit {
  public numero: number = 0;
  public numerosConjetura: Array<number> = [];

  constructor(private _activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      if (params['numero'] != null) {
        this.numerosConjetura = [];
        this.numero = params['numero'];
        this.conjeturaCollatz(this.numero);
      }
    });
  }

  conjeturaCollatz(n: any): void {
    n = parseInt(n);
    while(n != 1) {
      if(n % 2 == 0) {
        n = n / 2;
        this.numerosConjetura.push(n);
      } else if (n % 2 != 0) {
        n = n * 3 + 1
        this.numerosConjetura.push(n);
      }
    }
  }

}
