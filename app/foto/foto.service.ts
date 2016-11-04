import { Http, Headers, Response } from '@angular/http';
import { FotoComponent } from './foto.component';
import 'rxjs/Rx';
import { Observable } from 'rxjs'; 
import { Injectable } from '@angular/core';

@Injectable()
export class FotoService {

    http: Http;
    headers: Headers;
    url: string = 'http://localhost:8080/usuario/fotos';

    constructor(http: Http) { 

        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    lista(): Observable<FotoComponent[]> {

        return this.http.get(this.url).map(res => res.json());
    }

    cadastra(foto: FotoComponent): Observable<Response> {

        return this.http.post(this.url+"/salvar", JSON.stringify(foto), { headers: this.headers }); 

    }
}