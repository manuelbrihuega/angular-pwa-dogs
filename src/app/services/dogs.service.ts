import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dog } from '../models/dog.interface';

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  constructor(private http: HttpClient) { }

  getAllDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>('https://api.thedogapi.com/v1/breeds');
  }

  getDogById(id: string): Observable<Dog> {
    return this.http.get<Dog>(`https://api.thedogapi.com/v1/breeds/${id}`);
  }
}
