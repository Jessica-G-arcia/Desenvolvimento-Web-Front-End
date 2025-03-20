import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calcular-juros-simples',
  imports: [FormsModule],
  templateUrl: './calcular-juros-simples.component.html',
  styleUrl: './calcular-juros-simples.component.css'
})
export class CalcularJurosSimplesComponent {
  principal: number | undefined;
  taxa: number | undefined;
  tempo: number | undefined;;
  

  juros(): number {
    return (this.principal && this.taxa && this.tempo)
    ? (this.principal * (this.taxa / 100) * this.tempo)
    : 0;
  }

  montante(): number {
    return (this.principal && this.taxa && this.tempo)
    ? (this.principal + this.juros())
    : 0; 
  }
} 
