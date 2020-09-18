import { Component, OnInit } from '@angular/core';
import { BLURB } from "../../main-pages-directory";
import { GlobalConstants } from "../../app.component";

@Component({
  selector: 'app-about-blurbs',
  templateUrl: './about-blurbs.component.html',
  styleUrls: ['./about-blurbs.component.css']
})
export class AboutBlurbsComponent implements OnInit {
  blurbs = BLURB;
  isMobile = GlobalConstants.isMobile;

  constructor() { }

  ngOnInit(): void {
  }

}
