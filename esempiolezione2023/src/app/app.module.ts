import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElencoComponent } from './elenco/elenco.component';
import { DettaglioclienteperelencoComponent } from './dettaglioclienteperelenco/dettaglioclienteperelenco.component';

@NgModule({
  declarations: [	
    AppComponent,
    ElencoComponent,
      DettaglioclienteperelencoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
