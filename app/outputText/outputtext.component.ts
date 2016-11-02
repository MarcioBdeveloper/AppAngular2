import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'outputtext',
    templateUrl: './outputtext.component.html'
})
export class OutputtextComponent {
    @Input() nome: String;
    @Input() valor: String;
}