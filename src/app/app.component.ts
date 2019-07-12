import { Component } from '@angular/core';
import { SurfboardService } from './surfboard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  drewisbetterthanjared = "ocean";

  constructor(private service: SurfboardService) {}

  title() {
    return "Yep, he sucks";
  }

  horseHoof(something) {
    this.drewisbetterthanjared = something;
  }

  bread() {
    this.service.laptop("Windex");
  }
}
