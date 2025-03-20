import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  num1: number = 10;
  num2 = 20;
  urlImagem: string = "https://agrojardim.cdn.magazord.com.br/img/2023/12/produto/995/muda-frutifera-de-limao-siciliano-fruta-agrojardim.png?ims=fit-in/650x650/filters:fill(white)";

  somar () {
    this.num2++;
  }
}
