import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hospital } from '../../models/hospital.model';
import { HospitalService, MedicoService } from '../../services/service.index';
import { Medico } from '../../models/medico.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: []
})
export class MedicoComponent implements OnInit {

  hospitales: Hospital[] = [];
  medico: Medico = new Medico("", "", "", "", "");
  hospital: Hospital = new Hospital("");

  constructor(private _hospitalService: HospitalService,
    private _medicoService: MedicoService,
    private router: Router) { }

  ngOnInit() {
    this._hospitalService.cargarHospitales()
      .subscribe(hospitales => {
        this.hospitales = hospitales
      })
  }

  guardarMedico(f: NgForm) {
    if (f.invalid) return;
    this._medicoService.guardarMedico(this.medico)
      .subscribe(medico => {
        this.medico._id = medico._id
        this.router.navigate(['/medico', medico._id])
      })
  }


  cambioHospital(id: string) {
    this._hospitalService.obtenerHospital(id)
      .subscribe(hospital => this.hospital = hospital);
  }

}
