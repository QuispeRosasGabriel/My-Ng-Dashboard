import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../../services/service.index';
import { Medico } from '../../models/medico.model';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {

  medicos: Medico[] = [];
  constructor(private _medicoService: MedicoService) { }

  ngOnInit() {
    this.cargarMedidcos()
  }

  cargarMedidcos() {
    this._medicoService.cargarMedicos()
      .subscribe(medicos => { this.medicos = medicos })
  }

}
