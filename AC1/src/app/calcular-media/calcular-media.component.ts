import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calcular-media',
  imports: [FormsModule],
  templateUrl: './calcular-media.component.html',
  styleUrl: './calcular-media.component.css'
})
export class CalcularMediaComponent {
  ac1: number = 0;
  ac2: number = 0;
  ag: number = 0;
  af: number = 0;

  media(): number {
    return (this.ac1 * 0.15) + (this.ac2 * 0.30) + (this.ag * 0.10) + (this.af * 0.45)
  }

  situacao(): string {
    if(this.media() < 5) {
      return "Reprovado"
    }else {
      return "Aprovado"
    }
  }
}
