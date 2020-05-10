import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: Array<any> = [
    {
      titulo: "Principal", icono: "mdi mdi-gauge",
      submenu: [
        { titulo: "Dashboard", url: "/dashboard" },
        { titulo: "Progress", url: "/progress" },
        { titulo: "Gráficas", url: "/graficas1" },
        { titulo: "Promesas", url: "/promesas" },
        { titulo: "Rxjs", url: "/rxjs" }
      ]
    },
    {
      titulo: "Mantenimiento", icono: "mdi mdi-folder-lock-open",
      submenu: [
        { titulo: "Usuarios", url: "/usuarios" },
        { titulo: "Hospitales", url: "/hospitales" },
        { titulo: "Medicos", url: "/medicos" }
      ]
    }
  ]

  constructor() { }

}
