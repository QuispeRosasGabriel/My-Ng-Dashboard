import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/service.index';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {
  usuario: Usuario;
  constructor(private _usuarioService: UsuarioService) {
    this.usuario = this._usuarioService.usuario
  }

  ngOnInit() {
  }

}
