import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { retry, map, filter, observeOn } from "rxjs/operators"
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {

    this.subscription = this.regresaObservable()
      .subscribe(data => console.log(data),
        error => console.error(error),
        () => console.log("observador termino")
      )
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable(observer => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1

        const salida = {
          valor: contador
        }


        observer.next(salida);
        if (contador === 3) {
          clearInterval(intervalo);
          observer.complete();
        }
        // if (contador === 2) {
        //    clearInterval(intervalo);
        //   observer.error("Auxilio")
        // }
      }, 1000)
    }).pipe(
      map((resp) => resp = 10),
      filter((valor, index) => {
        if ((valor % 2) === 1) {
          return true;
        } else {
          return false
        }
      }))
  }
}
