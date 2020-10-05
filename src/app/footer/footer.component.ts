import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../app.component';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/';
import { faLinkedinIn, faDribbble } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  isMobile = GlobalConstants.isMobile;
  faMail = faEnvelope;
  faLink = faLinkedinIn;
  faDrib = faDribbble;

  constructor() { }

  ngOnInit(): void {
  }

}
