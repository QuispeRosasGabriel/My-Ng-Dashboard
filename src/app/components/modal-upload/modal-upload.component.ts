import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
import { SubirArchivoService } from '../../services/service.index';
import { ModalUploadService } from './modal-upload.service';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styles: []
})
export class ModalUploadComponent implements OnInit {

  imagenSubir: File;
  imagenTemp: any;
  constructor(private _subirArchivoService: SubirArchivoService,
    private _modalUploadService: ModalUploadService) {

  }

  ngOnInit() {
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


  subirImagen() {
    this._subirArchivoService.subirArchivo(this.imagenSubir,
      this._modalUploadService.tipo,
      this._modalUploadService.id)
      .then(resp => {
        this._modalUploadService.notificacion.emit(resp);
        this.cerrarModal();
        // this._modalUploadService.ocultarModal();
      })
      .catch(err => {
        console.log("error en la carga", err);
      })
  }

  cerrarModal() {
    this.imagenTemp = null;
    this.imagenSubir = null;
    this._modalUploadService.ocultarModal();
  }

}
