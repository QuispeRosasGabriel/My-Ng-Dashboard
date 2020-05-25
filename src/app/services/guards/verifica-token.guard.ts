import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class VerificaTokenGuard implements CanActivate {
  constructor(private _usuarioService: UsuarioService) { }

  canActivate(): Promise<boolean> | boolean {
    console.log("inicio de verifica token guard");
    let token = this._usuarioService.token;
    let payload = JSON.parse(atob(token.split('.')[1]));
    let expirado = this.verificarExpiracion(payload.exp)
    if (expirado) {
      this._usuarioService.logout();
      return false;
    }
    return this.verificarRenovacion(payload.exp)

  }


  verificarRenovacion(fechaExp: number): Promise<boolean> {
    return new Promise((res, rej) => {
      let tokenExp = new Date(fechaExp * 1000);
      let ahora = new Date()
      ahora.setTime(ahora.getTime() + (4 * 60 * 60 * 1000))
      if (tokenExp.getTime() > ahora.getTime()) {
        res(true);
      } else {
        this._usuarioService.renuevaToken()
          .subscribe(() => {
            res(true);
          }, () => {
            rej(false);
          })
      }
    })
  }

  verificarExpiracion(fechaExp: number) {
    let ahora = new Date().getTime() / 1000
    if (fechaExp < ahora) {
      return true;
    } else {
      return false
    }
  }
}
