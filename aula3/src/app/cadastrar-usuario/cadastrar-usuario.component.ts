import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-usuario',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cadastrar-usuario.component.html',
  styleUrl: './cadastrar-usuario.component.css'
})
export class CadastrarUsuarioComponent implements OnInit {
  form!: FormGroup;

  ngOnInit(): void {
      this.form = new FormGroup ({
        nome: new FormControl ('', Validators.required),
        email: new FormControl ('', Validators.required),
        senha: new FormControl ('', [Validators.required, Validators.min(6), Validators.max(20)]),
        confirmarsenha: new FormControl ('', [Validators.required, Validators.min(6), Validators.max(20)]),
      })
  }

  salvar() {
    
  }
}
