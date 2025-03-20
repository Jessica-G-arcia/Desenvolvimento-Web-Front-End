import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  num1: number = 0;
  num2: number = 0;
  operador: string = "";

  soma() {
    return this.num1 + this.num2
  }

  subtracao() {
    return this.num1 - this.num2
  }

  divisao(){
    return this.num1 / this.num2
  }

  multiplicacao(){
    return this.num1 * this.num2
  }


  calcular(){
      if(this.operador == "+"){
        this.soma();
      }if(this.operador == "-"){
        this.subtracao();
      }if(this.operador == "/"){
        this.divisao();
      }if(this.operador == "*"){
        this.multiplicacao();
      }else{
        ""
      }
  }


}
