import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  title: string = "Barra de Progreso"
  porcentaje: number = 50;
  minimo: number = 0;


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
