import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DestaquesComponent } from './destaques/destaques.component';
import { ListaVeiculosComponent } from './lista-veiculos/lista-veiculos.component';
import { ContatoComponent } from './contato/contato.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, DestaquesComponent, ListaVeiculosComponent,ContatoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NewCar Veículos';
}
