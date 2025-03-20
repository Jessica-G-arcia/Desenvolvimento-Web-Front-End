import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conversor-temperatura',
  imports: [FormsModule],
  templateUrl: './conversor-temperatura.component.html',
  styleUrl: './conversor-temperatura.component.css'
})
export class ConversorTemperaturaComponent {
  celsius: number = 0;
  fah: number = 0;
  kelvin: number = 0;

  converter() {
    this.fah = (this.celsius * 9/5)+32
    this.kelvin = this.celsius + 273.15 
  }
  
}
