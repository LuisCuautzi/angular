import { Component } from '@angular/core';
import { MiServicioService } from 'src/app/MiServicio/mi-servicio.service';

@Component({
  selector: 'app-listar-aerolineas',
  templateUrl: './listar-aerolineas.component.html',
  styleUrls: ['./listar-aerolineas.component.css']
})
export class ListarAerolineasComponent {
  /**
   *
   */
  constructor(private servicio: MiServicioService) {
    this.servicio.ObtenerListaAerolineas();
}

get resultados(){
  return this.servicio.listaDeAerolineas
}
}
