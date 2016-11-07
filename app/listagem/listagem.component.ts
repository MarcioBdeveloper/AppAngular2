import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { FotoComponent } from '../foto/foto.component';
import { FotoService } from '../foto/foto.service';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent {

    fotos: Object[] = [];
    service: FotoService;

    constructor(service: FotoService) {
        this.service = service;
        this.service.lista()
            .subscribe(fotos => this.fotos = fotos,
                erro => console.log(erro)
            );      
    }

    remove(foto: FotoComponent): void{
        this.service.remove(foto.id);
        console.log("entrou no remover");
    }

}

