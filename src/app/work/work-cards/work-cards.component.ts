import { Component, OnInit } from '@angular/core';
import { CARDS } from "../../main-pages-directory"
import { GlobalConstants } from "../../app.component";

@Component({
  selector: 'app-work-cards',
  templateUrl: './work-cards.component.html',
  styleUrls: ['./work-cards.component.css']
})
export class WorkCardsComponent implements OnInit {
  cards = CARDS;
  isMobile = GlobalConstants.isMobile;

  constructor() { }
  ngOnInit(): void {
  }

}
