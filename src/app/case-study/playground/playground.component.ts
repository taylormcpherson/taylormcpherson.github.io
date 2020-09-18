import { Component, OnInit } from '@angular/core';
import { INTROS } from "../../case-directory";

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  intro = INTROS;

  constructor() { }

  ngOnInit(): void {
  }

}
