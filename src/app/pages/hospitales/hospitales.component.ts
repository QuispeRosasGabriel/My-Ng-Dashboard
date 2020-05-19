import { Component, OnInit } from '@angular/core';
import { Hospital } from '../../models/hospital.model';
import { HospitalService } from '../../services/service.index';

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styleUrls: ['./hospitales.component.css']
})
export class HospitalesComponent implements OnInit {
  hospitales: Hospital[] = []


  constructor(private _hospitalService: HospitalService) { }

  ngOnInit() {
    this.cargarHospitales()
  }

  cargarHospitales() {
    this._hospitalService.cargarHospitales()
      .subscribe(hospitales => { this.hospitales = hospitales })
  }
  guardarHospital(hospital: Hospital) { }

  borrarHospital(hospital: Hospital) { }

}
