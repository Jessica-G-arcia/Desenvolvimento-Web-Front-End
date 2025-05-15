import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';


@Component({
  selector: 'app-produto',
  imports: [],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})

export class ProdutoComponent implements OnInit{
  produtos : any = [];
  constructor (private produtoService: ProdutoService) {}
  ngOnInit(): void {
      this.obterProdutos(); 
  }
  obterProdutos() {
    this.produtoService.obterTodos().subscribe((data: any) => {
        this.produtos = data; 

        console.log(this.produtos)
      });
  }

  
}
