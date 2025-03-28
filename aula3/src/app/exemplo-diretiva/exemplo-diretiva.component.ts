import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pessoa } from '../models/Pessoa';


@Component({
  selector: 'app-exemplo-diretiva',
  imports: [FormsModule, CommonModule],
  templateUrl: './exemplo-diretiva.component.html',
  styleUrl: './exemplo-diretiva.component.css'
})
export class ExemploDiretivaComponent {
  exibirTabela: boolean = false;
  pessoas: Pessoa[] = [
    {nome: 'Jurema', id: 1, cidade: 'Sorocaba', celular: '(15) 98132-7634'},
    {nome: 'Ramiro', id: 2, cidade: 'Votorantim', celular: '(15) 98837-7424'},
    {nome: 'Edvan', id: 3, cidade: 'Sorocaba', celular: '(15) 99132-7994'},
  ]
  nome: string = "";
}
