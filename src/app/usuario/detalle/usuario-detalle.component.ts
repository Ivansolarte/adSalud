import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-usuario-detalle',
    templateUrl: './usuario-detalle.component.html'
})

export class UsuarioDetalleComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {}

        ngOnInit() {
        const id = this.route.snapshot.params['id'];
        if (!id) {
            return;
        }
        console.log(id);
    }
}
