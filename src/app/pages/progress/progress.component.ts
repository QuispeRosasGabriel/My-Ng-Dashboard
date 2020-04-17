import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  title: string = "Barra de Progreso"
  porcentaje1: number = 20;
  porcentaje2: number = 30;
  minimo: number = 0;


  constructor() { }

  ngOnInit() {
  }


}
