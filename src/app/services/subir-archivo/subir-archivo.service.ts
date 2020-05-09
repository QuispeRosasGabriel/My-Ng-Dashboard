import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/constants';

@Injectable()
export class SubirArchivoService {

  constructor() { }

  subirArchivo(archivo: File, tipo: string, id: string) {

    return new Promise((res, rej) => {

      let formData = new FormData();
      let xhr = new XMLHttpRequest();

      formData.append("imagen", archivo, archivo.name);

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log("Subio imagen");
            res(JSON.parse(xhr.response))
          }
          else {
            console.log("fallo la subida");
            rej(JSON.parse(xhr.response))
          }
        }
      }

      let url = URL_SERVICIOS + "/uploads/" + tipo + "/" + id;
      xhr.open("PUT", url, true);
      xhr.send(formData);
    })
  }
}
