import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { AppComponent }     from './app.component';
import { HttpModule }       from '@angular/http';
import { FotoModule }       from './foto/foto.module';
import { OutputtextModule } from './outputText/outputtext.module';
import { PainelModule }     from './painel/painel.module'
import { CadastroComponent} from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component'
import { routing }          from './app.routes';
import { FormsModule, ReactiveFormsModule }      from '@angular/forms';




@NgModule({
  imports:      [ 
    BrowserModule, 
    FotoModule, 
    HttpModule, 
    OutputtextModule, 
    PainelModule, 
    routing,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ AppComponent, CadastroComponent, ListagemComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
