import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UsuarioService } from '../usuario/usuario.service';
import swal from 'sweetalert';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private _usuarioService: UsuarioService) { }
  canActivate() {
    if (this._usuarioService.usuario.role === "ADMIN_ROLE") {
      return true;
    } else {
      this._usuarioService.logout();
      swal("ERROR", "INTENTO ACCDER A UNA PÁGINA PROHIBIDA", "error")
      return false;
    }
  }
}
