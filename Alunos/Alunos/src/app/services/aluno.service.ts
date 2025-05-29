import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  urlApi: string = "http://localhost:3000/alunos";

  constructor(private http: HttpClient) { }

  listarAlunos() {
    return this.http.get(this.urlApi);
  }

  buscarAlunoPorRa(ra: string) {
    return this.http.get(`${this.urlApi}/${ra}`);
  }

  listarDisciplinas(ra: string) {
    return this.http.get(`${this.urlApi}/${ra}/disciplinas`);
  }

  editarAluno(ra: string, aluno: any) {
    return this.http.put(`${this.urlApi}/${ra}`, aluno);
  }
}