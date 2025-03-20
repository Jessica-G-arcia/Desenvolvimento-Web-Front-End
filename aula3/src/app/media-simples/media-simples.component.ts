import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-media-simples',
  imports: [FormsModule],
  templateUrl: './media-simples.component.html',
  styleUrl: './media-simples.component.css'
})
export class MediaSimplesComponent {
  nota1: number | undefined;
  nota2: number | undefined;
  nota3: number | undefined;
  nota4: number | undefined;

  somar(): number {
    return (this.nota1 || 0) + (this.nota2 || 0) + (this.nota3 || 0) + (this.nota4 || 0);
  }
  

  media(): number {
    return this.somar() / 4;
  }

  situacao(): string {
    if(this.media() < 6) {
      return "Reprovado"
    }else {
      return "Aprovado"
    }
  }
  
}
