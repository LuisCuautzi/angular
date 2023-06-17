import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { MiServicioService } from 'src/app/MiServicio/mi-servicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-aerolinea',
  templateUrl: './alta-aerolinea.component.html',
  styleUrls: ['./alta-aerolinea.component.css']
})
export class AltaAerolineaComponent {

  /**
   *
   */
  constructor(private servicio: MiServicioService , private router: Router) {

  }

  @ViewChild("caja1")
  private refCaja1! : ElementRef;

  @ViewChild("caja2")
  private refCaja2! : ElementRef;

  @ViewChild("caja3")
  private refCaja3! : ElementRef;

  @ViewChild("caja4")
  private refCaja4! : ElementRef;

  GuardarDatos():void{
    const nombre = this.refCaja1.nativeElement.value;
    const pais = this.refCaja2.nativeElement.value;
    const iata = this.refCaja3.nativeElement.value;
    const status = this.refCaja4.nativeElement.value;

    ///invocamos al metodo del servicio
    this.servicio.AltaAerolinea(nombre,pais,iata,status);

    Swal.fire({
      title: 'Seguro que quieres Guardar la Aerolinea?',
      confirmButtonText: 'OK',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        //redireccionar a la lista de aerolineas
        this.router.navigate(['/listaAerolineas'])
      }
    })
  }
}
