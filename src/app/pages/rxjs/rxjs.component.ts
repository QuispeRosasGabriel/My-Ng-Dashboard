import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { retry } from "rxjs/operators"

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() {

    this.regresaObservable().pipe(
      retry(2)
    ).subscribe(data => console.log(data),
      error => console.error(error),
      () => console.log("observador termino")
    )
  }

  ngOnInit() {
  }

  regresaObservable(): Observable<number> {
    return new Observable(observer => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1
        observer.next(contador);
        if (contador === 3) {
          clearInterval(intervalo);
          observer.complete();
        }
        if (contador === 2) {
          // clearInterval(intervalo);
          observer.error("Auxilio")
        }
      }, 1000)
    });
  }
}
