import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input() leyenda: string;
  @Input() porcentaje: number = 50;
  constructor() {
  }

  ngOnInit() {

  }

  cambiarValor(valor) {
    if (this.porcentaje >= 100) {
      this.porcentaje = 100
      return;
    }
    if (this.porcentaje <= 0 && valor < 0) {
      this.porcentaje = 0;
      return;
    }
    this.porcentaje = this.porcentaje + valor;
  }
}
