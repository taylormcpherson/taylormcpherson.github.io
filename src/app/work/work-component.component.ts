import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from "../app.component";

@Component({
  selector: 'app-work-component',
  templateUrl: './work-component.component.html',
  styleUrls: ['./work-component.component.css']
})
export class WorkComponentComponent implements OnInit {
  isMobile = GlobalConstants.isMobile;

  constructor() { }

  ngOnInit(): void {
  }

}
