import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ContactosComponent } from './contactos/contactos.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioListaComponent } from './usuario/lista/usuario-lista.component';
import { UsuarioDetalleComponent } from './usuario/detalle/usuario-detalle.component';

const appRoutes: Routes = [
   {path: 'home', component: HomeComponent},
   {path: 'clientes', component: ClientesComponent},
   {path: 'contactos', component: ContactosComponent},
   {path: 'usuario', component: UsuarioComponent,
    children: [
        {path: '', redirectTo: 'lista', pathMatch: 'full'},
        {path: 'lista', component: UsuarioListaComponent},
        // {path: 'detalle', component: UsuarioDetalleComponent},
        {path: 'detalle/:id', component: UsuarioDetalleComponent}
    ]
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
