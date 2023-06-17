import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

  public listaDeAerolineas: any[];

  constructor(private http: HttpClient) { 
    this.listaDeAerolineas = [];
  }
//metodo hace una peticion get a la api para recuperar la lista de aerolineas listaDeAerolineas
  ObtenerListaAerolineas(): void{
    this.http.get("https://localhost:44326/api/aerolineas").subscribe((respuesta: any) => {
      console.log(respuesta);
      this.listaDeAerolineas = respuesta;
    });
  }

  //metodo que hace una peticion post a la api para guardar la nueva aerolinea
  AltaAerolinea(nombre: string, pais: string, iata: string, status: string): void {
    this.http.post("https://localhost:44326/api/aerolineas", {
      "name": nombre,
      "country": pais,
      "iata": iata,
      "status": status
    }).subscribe((respuesta: any)=> {
      console.log(respuesta);
    });
  }

}