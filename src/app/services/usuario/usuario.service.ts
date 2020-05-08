import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from "@angular/common/http"
import { URL_SERVICIOS } from '../../config/constants';
import "rxjs/add/operator/map"
import swal from 'sweetalert';

@Injectable()
export class UsuarioService {
  usuario: Usuario;
  token: string;

  constructor(private http: HttpClient) {
    this.cargarStorage();
  }

  login(usuario: Usuario, recordar: boolean = false) {
    if (recordar) {
      localStorage.setItem("email", usuario.email);
    } else {
      localStorage.removeItem("email");
    }
    let url = URL_SERVICIOS + "/login";
    return this.http.post(url, usuario)
      .map((resp: any) => {
        localStorage.setItem("id", resp.id);
        localStorage.setItem("token", resp.token);
        localStorage.setItem("usuario", JSON.stringify(resp.usuario));
        return true;
      })
  }

  estaLogueado() {
    return (this.token.length > 5) ? true : false;
  }

  cargarStorage() {
    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token");
      this.usuario = JSON.parse(localStorage.getItem("usuario"))
    } else {
      this.token = "";
      this.usuario = null;
    }
  }

  crearUsuario(usuario: Usuario) {
    let url = URL_SERVICIOS + "/usuario"
    return this.http.post(url, usuario)
      .map((resp: any) => {
        swal("Usuario creado", usuario.email, "success")
        resp.usuario
      })
  }

}
