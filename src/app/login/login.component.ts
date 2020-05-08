import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';

declare function init_plugins()

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  recuerdame: boolean = false;
  constructor(private router: Router,
    private _usuarioService: UsuarioService) { }

  ngOnInit() {
    init_plugins();
  }

  ingresar(formulario: NgForm) {
    if (formulario.invalid) {
      return;
    }

    let usuario = new Usuario(null, formulario.value.email,
      formulario.value.password);

    this._usuarioService.login(usuario, formulario.value.recuerdame)
      .subscribe(resp => {
        console.log(resp);

      })
  }

}
