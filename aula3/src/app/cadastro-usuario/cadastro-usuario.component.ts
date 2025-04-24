import { Component, ViewChild } from '@angular/core';
import { Usuario } from '../models/Usuario';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro-usuario',
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastro-usuario.component.html',
  styleUrl: './cadastro-usuario.component.css'
})
export class CadastroUsuarioComponent {
  usuario: Usuario = {
    id: 0,
    nome: '',
    email: '',
    senha: '',
    ativo: false
  };

  @ViewChild('form') form!: NgForm;
  salvar(){
    if(this.form.valid){
      console.log ('Usuário salvo', this.usuario);
      alert('Usuário salvo com sucesso!');
    }
  }

}
