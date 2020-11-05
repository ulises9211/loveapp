import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AceptoComponent } from './components/acepto/acepto.component';
import { PropuestaComponent } from './components/propuesta/propuesta.component';
import { FotoComponent } from './components/foto/foto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AceptoComponent,
    PropuestaComponent,
    FotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
