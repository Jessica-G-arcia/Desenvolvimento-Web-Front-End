import { Routes } from '@angular/router';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';


export const routes: Routes = [
    {path: '', redirectTo: 'tela-principal', pathMatch: 'full'},
    {path: 'home', component: TelaPrincipalComponent}
];
