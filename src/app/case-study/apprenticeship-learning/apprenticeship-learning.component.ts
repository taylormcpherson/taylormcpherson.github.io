import { Component, OnInit } from '@angular/core';
import { INTROS } from "../../case-directory";

@Component({
  selector: 'app-apprenticeship-learning',
  templateUrl: './apprenticeship-learning.component.html',
  styleUrls: ['./apprenticeship-learning.component.css']
})
export class ApprenticeshipLearningComponent implements OnInit {
  intro = INTROS;

  constructor() { }

  ngOnInit(): void {
  }

}
