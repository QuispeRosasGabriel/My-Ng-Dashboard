import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/service.index';
import swal from 'sweetalert';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {
  usuario: Usuario;
  imagenSubir: File;
  imagenTemp: any;

  constructor(private _usuarioService: UsuarioService) {
    this.usuario = this._usuarioService.usuario
  }

  ngOnInit() {
  }

  guardar(usuario: Usuario) {
    this.usuario.nombre = usuario.nombre;
    this.usuario.email = usuario.email;

    this._usuarioService.actualizarUsuario(this.usuario)
      .subscribe((resp: any) => { })
  }

  seleccionImagen(archivo: File) {
    if (!archivo) {
      this.imagenSubir = null;
      return;
    }

    if (archivo.type.indexOf("image") < 0) {
      swal("Error", "Solo puede subir imágenes", "error");
      this.imagenSubir = null
      return;
    }

    let reader = new FileReader();
    let urlImagenTemp = reader.readAsDataURL(archivo)

    reader.onloadend = () => this.imagenTemp = reader.result
    this.imagenSubir = archivo
  }

  cambiarImagen() {
    this._usuarioService.cambiarImagen(this.imagenSubir, this.usuario._id)
  }
}
