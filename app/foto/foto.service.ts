import { Http, Headers, Response } from '@angular/http';
import { FotoComponent } from './foto.component';
import 'rxjs/Rx';
import { Observable } from 'rxjs'; 
import { Injectable } from '@angular/core';

@Injectable()
export class FotoService {

    http: Http;
    headers: Headers;
    url: string = 'http://localhost:8080/foto';

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

    delete(id: number): Observable<Response> {
    const urlParam = `${this.url}/${id}`;
    return this.http.delete(urlParam, {headers: this.headers});
    }

    private handleErrorRemover(error: any): Promise<any> {
        console.error('Não Foi possivel remover a Foto!', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}