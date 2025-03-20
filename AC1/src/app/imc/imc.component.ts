import { Component } from '@angular/core';
import { tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-imc',
  imports: [FormsModule],
  templateUrl: './imc.component.html',
  styleUrl: './imc.component.css'
})
export class ImcComponent {
  peso: number = 0;
  altura: number = 0;
  imc: number = 0;

  classificacao(): String {
    this.imc = this.peso / (this.altura*this.altura)
    if (this.imc < 18.5){
      return "Você está abaixo do peso"
    }if (this.imc >= 18.5 && this.imc <= 24.9){
      return "Você está com o peso normal"
    }if (this.imc >= 25 && this.imc <= 29.9){
      return "Você está com Sobrepeso"
    }if (this.imc >= 30 && this.imc <= 34.9){
      return "Você está com Obesidade grau I"
    }if (this.imc >= 35 && this.imc <= 39.9){
      return "Você está com Obesidade grau II"
    }if (this.imc > 40){
      return "Você está com Obesidade grau III"
    }else {
      return "Vá ao médico"
    }
  }

}