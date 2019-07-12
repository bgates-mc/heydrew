import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SurfboardService {
  autonomy = "Brian's Face";

  constructor() { }

  laptop(variable) {
    this.autonomy = variable;
  }
}
