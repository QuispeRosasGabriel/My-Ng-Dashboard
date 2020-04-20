import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
    this.contarTres().then(
      mensaje => console.log("termino")
    ).catch(error => console.error("error", error))

  }


  ngOnInit() {
  }

  contarTres() {
    let promesa = new Promise((res, rej) => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1;
        if (contador == 3) {
          res(true);
          // rej("un error")
          clearInterval(intervalo)
        }
      }, 2000)
    })
    return promesa;
  }

}
