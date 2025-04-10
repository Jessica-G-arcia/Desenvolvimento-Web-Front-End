import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  num1: number = 10;
  num2 = 20;
  urlImagem: String =
    "https://facens.br/wp-content/uploads/2021/03/logo-f.png";

  somar() {
    this.num2++;
  }
}
