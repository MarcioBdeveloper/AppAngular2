import { Component } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FotoService } from '../foto/foto.service';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {

    foto: FotoComponent = new FotoComponent();
    service: FotoService;
    meuForm: FormGroup;
    route: ActivatedRoute;
    router: Router;
    mensagem: string = '';

    constructor(service: FotoService, fb: FormBuilder, route: ActivatedRoute, router: Router){
        this.router = router;
        this.route = route;
        this.service = service;
        this.meuForm = fb.group({
            titulo: ['', Validators.compose([ Validators.required, Validators.minLength(5) ] )],
            urlFoto: ['',  Validators.required ],
            descricao: ['']

        })
        this.route.params.subscribe(params => {
            let id = params['id'];
            if(id) {
                this.service.buscaPorId(id)
                    .subscribe(
                        foto => this.foto = foto,
                        erro => console.log(erro));    
            }            
         });
    }


    cadastrar(event: Event){
       event.preventDefault();
        console.log(this.foto);

        this.service.cadastra(this.foto)
            .subscribe(() => {
                console.log('Foto salva com sucesso');
                this.mensagem = 'Foto salva com sucesso';
                if(this.foto.id){
                    this.router.navigate(['']);
                }
                this.foto = new FotoComponent();
            }, erro => {
                console.log(erro);
                this.mensagem = 'Não foi possível salvar a foto';
            });

    }
}