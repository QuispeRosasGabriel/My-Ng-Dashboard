import { Injectable } from '@angular/core';
import { Ajustes } from "../interfaces/ajustes"

@Injectable()
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: "assets/css/colors/default.css",
    tema: "default"
  }

  constructor() { }

}

