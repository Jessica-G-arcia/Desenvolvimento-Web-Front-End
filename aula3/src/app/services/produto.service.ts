import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  urlApi : string = "http://localhost:3000/produto";

  constructor(private http: HttpClient) { }

  obterTodos() {
    return this.http.get(this.urlApi);
  }

  inserir(produto: any) {
    return this.http.post(this.urlApi, produto);
  }
}
