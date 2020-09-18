import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from "../../app.component";

@Component({
  selector: 'app-work-intro',
  templateUrl: './work-intro.component.html',
  styleUrls: ['./work-intro.component.css']
})
export class WorkIntroComponent implements OnInit {
  isMobile = GlobalConstants.isMobile;

  constructor() { }

  ngOnInit(): void {
  }

}
