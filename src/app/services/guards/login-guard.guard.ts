import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class LoginGuardGuard implements CanActivate {
  constructor(private _usuarioService: UsuarioService,
    private router: Router) { }

  canActivate() {

    if (this._usuarioService.estaLogueado()) {
      console.log("paso el guard");
      return true;
    }
    else {
      console.log("No paso");
      this.router.navigate(["/login"])
      return false;
    }
  }
}
