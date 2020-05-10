import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from "@angular/common/http"
import { URL_SERVICIOS } from '../../config/constants';
import "rxjs/add/operator/map"
import swal from 'sweetalert';
import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';

@Injectable()
export class UsuarioService {
  usuario: Usuario;
  token: string;

  constructor(private http: HttpClient,
    private _subirArchivoService: SubirArchivoService) {
    this.cargarStorage();
  }

  estaLogueado() {
    return (this.token.length > 5) ? true : false;
  }

  cargarStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.token = '';
      this.usuario = null;
    }
  }

  guardarStorage(id: string, token: string, usuario: Usuario) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));

    this.usuario = usuario;
    this.token = token;
  }

  login(usuario: Usuario, recordar: boolean = false) {
    if (recordar) {
      localStorage.setItem('email', usuario.email);
    } else {
      localStorage.removeItem('email');
    }

    let url = URL_SERVICIOS + '/login';
    return this.http.post(url, usuario)
      .map((resp: any) => {

        this.guardarStorage(resp.id, resp.token, resp.usuario);

        return true;
      });
  }

  crearUsuario(usuario: Usuario) {
    let url = URL_SERVICIOS + "/usuario"
    return this.http.post(url, usuario)
      .map((resp: any) => {
        swal("Usuario creado", usuario.email, "success")
        resp.usuario
      })
  }

  actualizarUsuario(usuario: Usuario) {
    let url = URL_SERVICIOS + "/usuario/" + usuario._id
    url += "?token=" + this.token;
    return this.http.put(url, usuario).map((resp: any) => {
      let usuarioDB: Usuario = resp.usuario
      this.guardarStorage(usuarioDB._id, this.token, usuarioDB)
      swal("Usuario Actualizado", usuario.nombre, "success")
      return true;
    })
  }

  cambiarImagen(archivo: File, id: string) {
    this._subirArchivoService.subirArchivo(archivo, "usuarios", id)
      .then((resp: any) => {
        this.usuario.img = resp.usuario.img
        swal("Imagen Actualizada", this.usuario.nombre, "success");
        this.guardarStorage(id, this.token, this.usuario);
      })
      .catch(err => {
        swal("Ups, algo salió mal", err, "warning");

      })
  }

  cargarUsuarios(desde: number = 0) {
    let url = URL_SERVICIOS + "/usuario?desde=" + desde;
    return this.http.get(url);
  }

  buscarUsuarios(termino: string) {
    let url = URL_SERVICIOS + "/busqueda/coleccion/usuarios/" + termino
    return this.http.get(url).map((resp: any) => resp.usuarios)
  }
}
