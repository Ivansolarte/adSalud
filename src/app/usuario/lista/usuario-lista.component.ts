import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../usuario/usuario'; // datos de la base de datos

@Component({
    selector: 'app-usuario-lista',
    templateUrl: './usuario-lista.component.html'
})

export class UsuarioListaComponent implements OnInit {
    lista: Usuario[];
    constructor(
        private servicio: UsuarioService
    ) {}

        ngOnInit() {
            this.servicio.getUsuario().
            subscribe(
                rs => this.lista = rs,
                er => console.log(er),
                () => console.log(this.lista)
            // tslint:disable-next-line:semicolon
            )
    }
}
