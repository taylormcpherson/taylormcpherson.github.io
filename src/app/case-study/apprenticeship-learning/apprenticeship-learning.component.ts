import { Component, OnInit } from '@angular/core';
import { INTROS, CAUSEWAY } from "../../case-directory";
import { GlobalConstants } from "../../app.component";

@Component({
  selector: 'app-apprenticeship-learning',
  templateUrl: './apprenticeship-learning.component.html',
  styleUrls: ['./apprenticeship-learning.component.css']
})
export class ApprenticeshipLearningComponent implements OnInit {
  intro = INTROS;
  causeway = CAUSEWAY;
  isMobile = GlobalConstants.isMobile;

  constructor() { }

  ngOnInit(): void {
  }

}
