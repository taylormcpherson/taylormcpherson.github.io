import { Component, OnInit } from '@angular/core';
import { INTROS, CRIT, CRITPROCESS, CRITFINAL, CRITREFLECT, CRITREFLECTSECTIONS } from "../../case-directory";
import { GlobalConstants} from "../../app.component";


@Component({
  selector: 'app-critical-design',
  templateUrl: './critical-design.component.html',
  styleUrls: ['./critical-design.component.css']
})
export class CriticalDesignComponent implements OnInit {
  intros = INTROS;
  crits = CRIT;
  process = CRITPROCESS;
  final = CRITFINAL;
  reflect = CRITREFLECT;
  rSection = CRITREFLECTSECTIONS;
  isMobile = GlobalConstants.isMobile;

  constructor(){
  }

  ngOnInit(): void {
  }
}
