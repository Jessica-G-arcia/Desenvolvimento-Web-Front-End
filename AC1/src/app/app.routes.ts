import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import { ImcComponent } from './imc/imc.component';
import { ConversorTemperaturaComponent } from './conversor-temperatura/conversor-temperatura.component';
import { ApoliceComponent } from './apolice/apolice.component';


export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'}, //redireciona para rota home quanto a url estiver null depois da /
    {path:'home', component: HomeComponent}, //quando a pessoa digita home depois da /
    {path:'calculadora', component: CalculadoraComponent},
    {path: 'calcular-media', component: CalcularMediaComponent},
    {path: 'imc', component: ImcComponent},
    {path: 'conversor-temperatura', component: ConversorTemperaturaComponent},
    {path: 'apolice', component: ApoliceComponent},
    {path: '**', component: PaginaNaoEncontradaComponent}, //essa sempre precisa ser a última rota
];
