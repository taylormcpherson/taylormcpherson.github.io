import { Component, OnInit } from '@angular/core';
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  isMobile: boolean

  constructor() {
    if (window.innerWidth < 500) {
      this.isMobile = true;
    }
  }

  ngOnInit(): void {
  }

}
