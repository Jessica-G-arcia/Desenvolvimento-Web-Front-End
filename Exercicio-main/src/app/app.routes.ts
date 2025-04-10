import { Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

export const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'menu', component:MenuComponent},
    {path: 'login', component: LoginComponent},
    {path: 'perfil/:email', component: PerfilComponent},
    {path: 'perfil', component: PerfilComponent},
    {path: '**', component: PaginaNaoEncontradaComponent},
    

];
