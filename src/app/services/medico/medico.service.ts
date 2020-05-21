import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/constants';


@Injectable()
export class MedicoService {
  totalMedicos: number = 0


  constructor(private http: HttpClient) { }


  cargarMedicos() {
    let url = URL_SERVICIOS + "/medico"
    return this.http.get(url)
      .map((resp: any) => {
        this.totalMedicos = resp.total

        return resp.medicos
      }
      )
  }

}
