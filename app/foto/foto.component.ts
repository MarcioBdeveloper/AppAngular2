import { Component, Input } from '@angular/core'

@Component({
    moduleId: module.id,
    selector: 'foto',
    templateUrl: './foto.component.html',
    styleUrls: ['./foto.component.css']
})
export class FotoComponent {

    @Input() titulo: String;
    @Input() urlFoto: String;
    descricao: String;
    id: number;
}