import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElencoComponent } from './elenco/elenco.component';
import { DettaglioclienteperelencoComponent } from './dettaglioclienteperelenco/dettaglioclienteperelenco.component';
import { ClientiService } from './clienti.service';
import { AddClienteComponent } from './add-cliente/add-cliente.component';
import { FormsModule } from '@angular/forms';

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
    FormsModule
  ],
  providers: [ClientiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
