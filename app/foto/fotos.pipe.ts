import { Pipe } from '@angular/core'
import { FotoComponent } from './foto.component';


@Pipe({
    name: "filtroPorTitulo",

})
export class FiltroPorTitulo {

    transform(fotos: FotoComponent[], digitado: string){
        digitado = digitado.toLowerCase();
        return fotos.filter( foto => foto.titulo.toLowerCase().includes(digitado));
    }
}