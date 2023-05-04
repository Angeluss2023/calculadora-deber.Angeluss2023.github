import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MensajeComponent } from './mensaje/mensaje.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule, MensajeComponent],
  templateUrl: './main.html',
  styleUrls: ['./main.css'],
})
export class App {
  name = 'Bryam';
  cargo = 'Estudiante';
  a = 0;
  b = 0;
  c = 0;
  contador = 0;
  mensaje = '';

  sumar() {
    this.contador++;
    this.c = Number(this.a) + Number(this.b);
  }

  restar() {
    this.contador++;
    this.c = this.a - this.b;
  }

  multiplicar() {
    this.contador++;
    this.c = this.a * this.b;
  }

  dividir() {
    this.contador++;
    if (this.b !== 0) {
      this.c = this.a / this.b;
    } else {
      this.c = NaN;
    }
  }

  calcular() {
    console.log('Hola UPS', this.a);
    this.contador = this.contador + 1;
    this.c = 0 + this.a + eval('' + this.b);
  }

  mostrarMensaje(mensaje: string) {
    this.mensaje = mensaje;
  }
}

bootstrapApplication(App);
