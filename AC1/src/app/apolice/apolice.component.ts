import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-apolice',
  imports: [FormsModule],
  templateUrl: './apolice.component.html',
  styleUrl: './apolice.component.css'
})
export class ApoliceComponent {
  nome: string = "";
  genero: string = "";
  idade: number = 0;
  valorauto: number = 0;

  valorapolice() {
    if(this.genero==="M" && this.idade <= 25) {
      return (this.valorauto * 0.15)
    }if (this.genero==="M" && this.idade > 25) {
      return (this.valorauto * 0.10)
    }else {
      return (this.valorauto * 0.08)
    }
  }
      
  
}
