import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {

    usuarios: Object[] = [];

    constructor(http :Http){
        let stream = http.get('http://localhost:8080/usuario');
        stream.subscribe(res =>{
            this.usuarios = res.json();
            console.log(this.usuarios);
        })
    }
 }
