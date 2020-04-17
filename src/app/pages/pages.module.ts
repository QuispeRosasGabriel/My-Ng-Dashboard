import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { CommonModule } from '@angular/common';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent

  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    CommonModule
  ]
})
export class PagesModule { }
