import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {
  titulo: string;

  constructor(private router: Router, private title: Title) {
    this.getDataRoute().subscribe(event => {
      this.titulo = event.titulo;
      this.title.setTitle(this.titulo);
    })
  }

  ngOnInit() {
  }

  getDataRoute() {
    return this.router.events.pipe(
      filter(data => data instanceof ActivationEnd),
      filter((data: ActivationEnd) => data.snapshot.firstChild === null),
      map((data: ActivationEnd) => data.snapshot.data)
    )

  }

}
