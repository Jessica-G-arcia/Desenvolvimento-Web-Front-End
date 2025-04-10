import { Component, NgModule} from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
  export class LoginComponent {
    email: string = '';
    senha: string = '';



    constructor(private router: Router) { }

    entrar(): void {

      if (this.email === 'admin@exemplo.com' && this.senha === '1234') {
        this.router.navigate(['/perfil', this.email]);
        // Aqui você pode adicionar lógica adicional, como armazenar o email no localStorage ou em um serviço de autenticação
        localStorage.setItem('email', this.email);
        // Armazena o email no localStorage para uso posterior
        // prosseguir com login
      } else {
        this.router.navigate(['/login'])
        alert('Email ou senha inválidos');
        // Aqui você pode adicionar lógica para lidar com falhas de autenticação, como exibir uma mensagem de erro
        // ou redirecionar para uma página de erro
      }
    }
  }





