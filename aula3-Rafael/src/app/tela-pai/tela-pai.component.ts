import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tela-pai',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './tela-pai.component.html',
  styleUrl: './tela-pai.component.css'
})
export class TelaPaiComponent {

}
