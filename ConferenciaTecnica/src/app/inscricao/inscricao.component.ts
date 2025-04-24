import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, Validators, FormGroup, ReactiveFormsModule, FormArray, FormBuilder } from '@angular/forms';
import { StorageService } from '../services/localstorage.services';

@Component({
  selector: 'app-inscricao',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './inscricao.component.html',
  styleUrl: './inscricao.component.css'
})
export class InscricaoComponent implements OnInit {
  form!: FormGroup;
  localStorageKey = 'inscricao';

  constructor(private fb: FormBuilder, private storageService: StorageService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nomeEvento: ['', Validators.required],
      modalidade: ['', Validators.required],
      dataInicio: ['', Validators.required],
      dataFim: ['', Validators.required],
      participantes: this.fb.array([this.criarParticipante()], Validators.required)
    });

    // const novoForm = this.storageService.getLocal('form');
    // this.form = novoForm !== null ? novoForm : this.form.value;

    // const novoForm = this.storageService.getLocal(this.localStorageKey);
    // if (novoForm) {
    //   this.form.patchValue(novoForm);
    //   if (novoForm.participantes) {
    //     novoForm.participantes.forEach((part: any) => {
    //       this.participantes.push(this.fb.group(part));
    //     });
    //   }
    // }
  }

  get participantes(): FormArray {
    return this.form.get('participantes') as FormArray;
  }

  criarParticipante(): FormGroup {
    return new FormGroup({
      nome: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      cpf: new FormControl('', Validators.required),
      tipoIngresso: new FormControl('', Validators.required)
    });
  }

  adicionarParticipante() {
    this.participantes.push(this.criarParticipante());
  }

  removerParticipante(index: number) {
    this.participantes.removeAt(index);
  }

  salvar() {
    // this.storageService.setLocal(this.localStorageKey, this.form.value);
    console.log('Inscrição salva: ', this.form.value);
    alert('Inscrição salva com sucesso');
  }
}

