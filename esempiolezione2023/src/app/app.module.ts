import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElencoComponent } from './elenco/elenco.component';
import { DettaglioclienteperelencoComponent } from './dettaglioclienteperelenco/dettaglioclienteperelenco.component';
import { AddClienteComponent } from './add-cliente/add-cliente.component';
import { FormsModule } from '@angular/forms';
import { ClientiService } from './util/ClientiService';
import { ClientiServiceLocal } from './clienti.service';
import { HttpClientModule } from '@angular/common/http';
import { ClientiServiceRestService } from './util/ClientiServiceRest.service';


@NgModule({
  declarations: [
    AppComponent,
    ElencoComponent,
    DettaglioclienteperelencoComponent,
    AddClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ provide: ClientiService, useClass: ClientiServiceRestService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
