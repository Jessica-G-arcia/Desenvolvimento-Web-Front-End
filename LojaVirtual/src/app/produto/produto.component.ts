import { Component } from '@angular/core';
import { Produto } from '../models/Produto';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produto',
  imports: [CommonModule],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {

  constructor (private route: Router) { }

  produtos: Produto [] = [
    { id: 1, nome: 'Cama (G)', preco: 'R$ 159,90', descricao: 'Cama tamanho G. Ideal para pets de porte grande', emEstoque: true },
    { id: 2, nome: 'Cama (M)', preco: 'R$ 149,90', descricao: 'Cama tamanho M. Ideal para pets de porte médio', emEstoque: true },
    { id: 3, nome: 'Cama (P)', preco: 'R$ 139,90', descricao: 'Cama tamanho P. Ideal para pets de porte pequeno', emEstoque: false },
    { id: 4, nome: 'Vasilha para ração', preco: 'R$ 59,90', descricao: 'Vasilha de inox para ração (cães e gatos).', emEstoque: false },
    { id: 5, nome: 'Vasilha para água', preco: 'R$ 79,90', descricao: 'Vasinha de plástico para água (cães e gatos). ', emEstoque: true },
  ]

  abrirDetalhe(id: number) {
    this.route.navigate(['produto-detalhe', id]);
  }
}

 