import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CicciobelloComponent } from './cicciobello/cicciobello.component';
import { CategorieService } from './util/categorie.service';
import { HttpClientModule } from '@angular/common/http';
import { ElencoCategorieComponent } from './elenco-categorie/elenco-categorie.component';

@NgModule({
  declarations: [
    AppComponent,
    CicciobelloComponent,
    ElencoCategorieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{ provide: CategorieService, useClass: CategorieService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
