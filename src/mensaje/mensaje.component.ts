import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  standalone: true,
  styleUrls: ['./mensaje.component.css'],
})
export class MensajeComponent implements OnInit {
  @Input() name = 'bryam';
  @Output() mensajeEnviado = new EventEmitter<string>();

  enviarMensaje() {
    const mensaje = 'Hola desde el componente hijo';
    this.mensajeEnviado.emit(mensaje);
  }
  constructor() {}
  ngOnInit() {}
}
