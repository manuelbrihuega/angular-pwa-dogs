import { Component, Input } from '@angular/core';

export interface PeriodicElement {
  identificador: number;
  titulo: string;
  subtitulo: string;
  texto: string;
}

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css',
})
export class GridComponent {
  @Input() elementos : PeriodicElement[];
  displayedColumns: string[] = ['identificador', 'titulo', 'subtitulo', 'texto'];

  constructor() {
    this.elementos = [];
  }
}
