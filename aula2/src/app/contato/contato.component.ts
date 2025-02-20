import { Component, inject, Input } from '@angular/core';


@Component({
  selector: 'app-contato',
  imports: [],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
  //activeModal = inject(NgbActiveModal);
  
    @Input() name: string = "";
}
