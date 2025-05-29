import { Component} from '@angular/core';
import { OnInit } from '@angular/core';
import { AlunoService } from '../services/aluno.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-tela-principal',
  imports: [CommonModule, FormsModule],
  templateUrl: './tela-principal.component.html',
  styleUrl: './tela-principal.component.css'
})
export class TelaPrincipalComponent implements OnInit {
  alunos: any = [];

  constructor(private alunoService: AlunoService) {}

  ngOnInit(): void {
    this.obterAlunos();
  }
  
  obterAlunos() {
    this.alunoService.listarAlunos().subscribe((data: any) => {
      this.alunos = data;
      console.log(this.alunos);
    });
  }

  buscarAlunoPorRa(ra: string) {
    this.alunoService.buscarAlunoPorRa(ra).subscribe((data: any) => {
      console.log(data);
    });
  }

  listarDisciplinas(ra: string) {
    this.alunoService.listarDisciplinas(ra).subscribe((data: any) => {
      console.log(data);
    });
  }

  editarAluno(ra: string, aluno: any) {
    this.alunoService.editarAluno(ra, aluno).subscribe((data: any) => {
      console.log(data);
      this.obterAlunos();
    });
  }



}






