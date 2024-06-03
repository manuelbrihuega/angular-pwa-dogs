import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() identificador: number;
  @Input() titulo: string;
  @Input() subtitulo: string;
  @Input() texto: string;

  constructor() {
    this.identificador=0;
    this.titulo = '';
    this.subtitulo = '';
    this.texto = '';
  }
}
