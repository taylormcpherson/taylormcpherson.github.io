import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from "../../app.component";

@Component({
  selector: 'app-about-intro',
  templateUrl: './about-intro.component.html',
  styleUrls: ['./about-intro.component.css']
})
export class AboutIntroComponent implements OnInit {
  isMobile = GlobalConstants.isMobile;
  constructor() { }

  ngOnInit(): void {
  }

}
