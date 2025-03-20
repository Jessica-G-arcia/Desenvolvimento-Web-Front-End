import { Component, inject } from '@angular/core';
import { NgbCarouselModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContatoModalComponent } from '../contato-modal/contato-modal.component';

@Component({
  selector: 'app-destaque',
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: './destaque.component.html',
  styleUrl: './destaque.component.css'
})
export class DestaqueComponent {
  private modalService = inject(NgbModal);

  abrirModal() {
    const modalRef = this.modalService.open(ContatoModalComponent);
  }
}
