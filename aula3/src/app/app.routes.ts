import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { MediaSimplesComponent } from './media-simples/media-simples.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { TelaPaiComponent } from './tela-pai/tela-pai.component';
import { TelaFilho1Component } from './tela-filho1/tela-filho1.component';
import { TelaFilho2Component } from './tela-filho2/tela-filho2.component';
import { CalcularJurosSimplesComponent } from './calcular-juros-simples/calcular-juros-simples.component';
import { ExemploDiretivaComponent } from './exemplo-diretiva/exemplo-diretiva.component';
import { TarefasComponent } from './tarefas/tarefas.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'}, //redireciona para rota home quanto a url estiver null depois da /
    {path:'home', component: HomeComponent}, //quando a pessoa digita home depois da /
    {path:'calculadora', component: CalculadoraComponent},
    {path:'media-simples', component: MediaSimplesComponent},
    {path: 'tela-pai', component: TelaPaiComponent, 
    children: [
        {path: 'tela-filho1', component: TelaFilho1Component},
        {path: 'tela-filho2', component: TelaFilho2Component} 
    ]
    },
    {path: 'calcular-juros-simples', component: CalcularJurosSimplesComponent},
    {path: 'exemplo-diretiva', component: ExemploDiretivaComponent},
    {path: 'tarefas', component: TarefasComponent},
    {path: '**', component: PaginaNaoEncontradaComponent}, //essa sempre precisa ser a última rota
];
