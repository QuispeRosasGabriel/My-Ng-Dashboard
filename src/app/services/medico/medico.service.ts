import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/constants';
import { UsuarioService } from '../usuario/usuario.service';
import swal from 'sweetalert';
import { Medico } from '../../models/medico.model';


@Injectable()
export class MedicoService {
  totalMedicos: number = 0


  constructor(private http: HttpClient, private _usuarioService: UsuarioService) { }


  cargarMedicos() {
    let url = URL_SERVICIOS + "/medico"
    return this.http.get(url)
      .map((resp: any) => {
        this.totalMedicos = resp.total

        return resp.medicos
      }
      )
  }
  buscarMedicos(termino: string) {
    let url = URL_SERVICIOS + "/busqueda/coleccion/medicos/" + termino
    return this.http.get(url).map((resp: any) => resp.medicos)
  }

  borrarMedico(id: string) {
    let url = URL_SERVICIOS + "/medico/" + id;
    url += "?token=" + this._usuarioService.token;

    return this.http.delete(url)
      .map(resp => {
        swal("Medico Borrado", "Medico borrado correctamente", "success")

        return resp;
      })
  }

  guardarMedico(medico: Medico) {
    let url = URL_SERVICIOS + "/medico";
    url += "?token=" + this._usuarioService.token;
    return this.http.post(url, medico)
      .map((resp: any) => {
        swal("Medico creado", medico.nombre, "success")
        return resp.medico;
      })
  }

  cargarMedico(id: string) {
    let url = URL_SERVICIOS + "/medico/" + id;
    return this.http.get(url)
      .map((resp: any) => {
        return resp.medico;
      })
  }

}
