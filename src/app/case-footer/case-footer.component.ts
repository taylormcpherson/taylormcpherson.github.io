import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from "../app.component";

@Component({
  selector: 'app-case-footer',
  templateUrl: './case-footer.component.html',
  styleUrls: ['./case-footer.component.css']
})
export class CaseFooterComponent implements OnInit {
  isMobile = GlobalConstants.isMobile;

  constructor() { }

  ngOnInit(): void {

  }

}
