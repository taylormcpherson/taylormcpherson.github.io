import { Component, OnInit } from '@angular/core';
import { INTROS, TIMELY, TIMELYPROCESS, TIMELYFINAL, TIMELYREFLECT, TIMELYREFLECTSECTIONS } from "../../case-directory";
import { GlobalConstants } from "../../app.component";

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
  isMobile = GlobalConstants.isMobile;

  constructor() { }

  ngOnInit(): void {
  }

}
