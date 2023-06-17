import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarAerolineasComponent } from './ListarAerolineas/listar-aerolineas/listar-aerolineas.component';
import { AltaAerolineaComponent } from './AltaAerolinea/alta-aerolinea/alta-aerolinea.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarAerolineasComponent,
    AltaAerolineaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
