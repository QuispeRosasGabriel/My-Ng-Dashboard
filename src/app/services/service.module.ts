import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService, SharedService, SidebarService, UsuarioService } from "./service.index"
import { HttpClientModule } from '@angular/common/http';
import { LoginGuardGuard } from './service.index';
import { SubirArchivoService } from './subir-archivo/subir-archivo.service';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SettingsService,
    SharedService,
    SidebarService,
    UsuarioService,
    LoginGuardGuard,
    SubirArchivoService
  ],
  declarations: []
})
export class ServiceModule { }
