import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { AppComponent }     from './app.component';
import { HttpModule }       from '@angular/http';
import { FotoModule }       from './foto/foto.module';
import { OutputtextModule } from './outputText/outputtext.module';




@NgModule({
  imports:      [ BrowserModule, FotoModule, HttpModule, OutputtextModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
