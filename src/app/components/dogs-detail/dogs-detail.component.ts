import { Component, OnInit, ViewChild } from '@angular/core';
import { Dog } from '../../models/dog.interface';
import { DogsService } from '../../services/dogs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-dogs-detail',
  templateUrl: './dogs-detail.component.html',
  styleUrl: './dogs-detail.component.css'
})
export class DogsDetailComponent implements OnInit {
  dog: Dog;
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  constructor(private dogsService: DogsService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.dog = {id: 0, name: '', bred_for: '', breed_group: '', life_span: '', temperament: '', origin: '', reference_image_id: '', weight: { imperial: '0', metric: '0'}, height: {imperial: '0', metric: '0'}};
  }

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.dogsService.getDogById(identifier).subscribe((dog => {
      if (!dog) {
        this.router.navigateByUrl('/');
      } else {
        this.dog = dog;
        this.dog.reference_image_id = `https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`;
      }
    }));
  }
}
