import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AceptoComponent } from './components/acepto/acepto.component';
import { PropuestaComponent } from './components/propuesta/propuesta.component';
import {FotoComponent } from './components/foto/foto.component';

const routes: Routes = [
  { path: 'propuesta', component: PropuestaComponent},
  { path: 'acepto', component: AceptoComponent},
  { path: 'foto', component: FotoComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'propuesta' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
