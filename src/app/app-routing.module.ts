import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarAerolineasComponent } from './ListarAerolineas/listar-aerolineas/listar-aerolineas.component';
import { AltaAerolineaComponent } from './AltaAerolinea/alta-aerolinea/alta-aerolinea.component';

const routes: Routes = [
  {path: 'listaAerolineas', component: ListarAerolineasComponent},
  {path: 'altaAerolineas', component: AltaAerolineaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
