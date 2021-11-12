import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menucollatz',
  templateUrl: './menucollatz.component.html',
  styleUrls: ['./menucollatz.component.css']
})
export class MenucollatzComponent implements OnInit {
  public arrayNumeros: Array<number> = [];

  constructor() { 
    
  }

  ngOnInit(): void {
    for(let i = 0; i < 10; i++) {
      this.arrayNumeros.push(Math.floor(Math.random() * 100) + 2);
    }
  }

}
