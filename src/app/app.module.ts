import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// rutas
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ContactosComponent } from './contactos/contactos.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioListaComponent } from './usuario/lista/usuario-lista.component';
import { UsuarioDetalleComponent } from './usuario/detalle/usuario-detalle.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientesComponent,
    ContactosComponent,
    UsuarioComponent,
    UsuarioListaComponent,
    UsuarioDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
