import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getQualifications(): Observable<string[]> {
    return of(['Bachelor of Architecture', 'Bachelor of Arts', 'Bachelor of Commerce', 'Bachelor of Architecture']);
  }

  getExperiences(): Observable<string[]> {
    return of(['Fresher', '1-3 years', '4-5 years', '6 years or above']);
  }

}
