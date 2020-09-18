import { Component } from '@angular/core';
import {Observable, Subject} from "rxjs";
import { Injectable } from '@angular/core';
import { DeviceDetectorService } from "ngx-device-detector";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    //animation triggers go here
  ]
})

export class AppComponent {
  title = 'Taylor McPherson';
  isMobile = (GlobalConstants.screenWidth < 500);

}

export class GlobalConstants {
    public static screenWidth: number = window.innerWidth;
    public static isMobile: boolean = (GlobalConstants.screenWidth < 500);
}




