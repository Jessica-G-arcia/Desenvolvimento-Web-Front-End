import { Component } from '@angular/core';
import { Tarefa } from '../models/Tarefa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarefas',
  imports: [CommonModule],
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css'
})
export class TarefasComponent {
  concluida: boolean = false;
  tarefas: Tarefa[] = [
      {descricao: 'Criar planilha de controle de Vendas', id: 1, concluida: true},
      {descricao: 'Criar dashboard', id: 2, concluida: true},
      {descricao: 'Relacionar planilha + dashboard', id: 3, concluida: false},
      {descricao: 'Criar manual de uso', id: 4, concluida: false},
      {descricao: 'Compartilhar relatório', id: 5, concluida: false},
    ]
  
    concluir(id: number): void {
      const tarefa = this.tarefas.find(t => t.id === id);
      if (tarefa) {
          tarefa.concluida = true;
      }
    }
  

}
