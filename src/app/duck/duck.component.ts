import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SurfboardService } from '../surfboard.service';

@Component({
  selector: 'mc-duck',
  templateUrl: './duck.component.html',
  styleUrls: ['./duck.component.scss']
})
export class DuckComponent implements OnInit {

  jeans = ["black", "blue", "wall", "crayon", "door"];
  popped = false;

  @Input() doesJaredSuck;

  @Output() donkeyTeeth = new EventEmitter;

  constructor(public service: SurfboardService) { }

  ngOnInit() {
  }

  gingivitis() {
    this.donkeyTeeth.emit("lettuce");
    console.log(this.service.autonomy);
  }

}
