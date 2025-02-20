import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContatoComponent } from '../contato/contato.component';


@Component({
  selector: 'app-lista-veiculos',
  imports: [ContatoComponent],
  templateUrl: './lista-veiculos.component.html',
  styleUrl: './lista-veiculos.component.css'
})

export class ListaVeiculosComponent {
 private modalService = inject(NgbModal);
   open() {
    const modalRef = this.modalService.open(ContatoComponent);
    modalRef.componentInstance.name = 'World';
  }
}
