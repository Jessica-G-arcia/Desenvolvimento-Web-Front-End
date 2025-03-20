import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contato-modal',
  standalone: true,
  imports: [],
  templateUrl: './contato-modal.component.html',
  styleUrl: './contato-modal.component.css'
})
export class ContatoModalComponent {
  activeModal = inject(NgbActiveModal);
}
