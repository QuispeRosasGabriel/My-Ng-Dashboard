import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  leyenda: string = '';
  porcentaje: number = 50;
  constructor() { }

  ngOnInit() {
  }

  cambiarValor(valor) {
    if (this.porcentaje >= 100) {
      return;
    }
    if (this.porcentaje <= 0 && valor < 0) {
      return;
    }
    this.porcentaje = this.porcentaje + valor;
  }
}
