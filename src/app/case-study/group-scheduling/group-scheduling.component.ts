import { Component, OnInit } from '@angular/core';
import { INTROS, TIMELY, TIMELYPROCESS, TIMELYFINAL, TIMELYREFLECT, TIMELYREFLECTSECTIONS } from "../../case-directory";

@Component({
  selector: 'app-group-scheduling',
  templateUrl: './group-scheduling.component.html',
  styleUrls: ['./group-scheduling.component.css']
})
export class GroupSchedulingComponent implements OnInit {
  intro = INTROS;
  timely = TIMELY;
  process = TIMELYPROCESS;
  final = TIMELYFINAL;
  reflect = TIMELYREFLECT;
  rSection = TIMELYREFLECTSECTIONS;

  constructor() { }

  ngOnInit(): void {
  }

}
