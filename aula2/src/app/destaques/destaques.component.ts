import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-destaques',
  imports: [NgbCarouselModule],
  templateUrl: './destaques.component.html',
  styleUrl: './destaques.component.css'
})
export class DestaquesComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/1800/500`);
}
