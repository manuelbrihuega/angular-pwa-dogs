import { Component, OnInit } from '@angular/core';
import { DogsService } from '../../services/dogs.service';
import { Dog } from '../../models/dog.interface';
import { PeriodicElement } from '../base/grid/grid.component';
import { animate, trigger, style, transition, stagger, query } from '@angular/animations';


@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrl: './dogs-list.component.css',
  animations: [
    trigger('fadeInOutProgressive', [
      transition(':enter', [
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.5s', style({ opacity: 1 })),
          ]),
        ], { optional: true }),
      ]),
    ]),
  ]
})
export class DogsListComponent implements OnInit {
  dogs: Dog[];
  elementos: PeriodicElement[];
  showTable: boolean;
  showCards: boolean;
  showLoading: boolean;

  constructor(private dogsService: DogsService) {
    this.dogs = [];
    this.elementos = [];
    this.showTable = false;
    this.showCards = false;
    this.showLoading = false;
  }

  ngOnInit(): void {
    this.showLoading = true;
    this.dogsService.getAllDogs().subscribe((dogs) => {
      this.dogs = dogs;
      this.elementos = dogs.map(dog => ({
        identificador: dog.id,
        titulo: dog.name,
        subtitulo: dog.breed_group,
        texto: dog.temperament
      }));
      this.showLoading = false;
      this.showCards = true;
    });
  }

  toggleShowTable() {
    this.showTable = !this.showTable;
    this.showCards = !this.showCards;
  }

}
