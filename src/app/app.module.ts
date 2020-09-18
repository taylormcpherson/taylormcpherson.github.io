import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontawesomeObject } from "@fortawesome/fontawesome-svg-core";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkIntroComponent } from './work/work-intro/work-intro.component';
import { WorkCardsComponent } from './work/work-cards/work-cards.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutIntroComponent } from './about/about-intro/about-intro.component';
import { AboutBlurbsComponent } from './about/about-blurbs/about-blurbs.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { WorkComponentComponent } from './work/work-component.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResumeComponent } from './resume/resume.component';
import { DeviceDetectorModule } from "ngx-device-detector";
import { HttpClientModule } from '@angular/common/http';
import { EmbedVideo } from 'ngx-embed-video';
import { CriticalDesignComponent } from './case-study/critical-design/critical-design.component';
import { GroupSchedulingComponent } from './case-study/group-scheduling/group-scheduling.component';
import { ApprenticeshipLearningComponent } from './case-study/apprenticeship-learning/apprenticeship-learning.component';
import { PlaygroundComponent } from './case-study/playground/playground.component';
import { CaseFooterComponent } from './case-footer/case-footer.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';


@NgModule({
  declarations: [
    AppComponent,
    WorkIntroComponent,
    WorkCardsComponent,
    NavBarComponent,
    AboutIntroComponent,
    AboutBlurbsComponent,
    FooterComponent,
    WorkComponentComponent,
    AboutComponent,
    ResumeComponent,
    CriticalDesignComponent,
    GroupSchedulingComponent,
    ApprenticeshipLearningComponent,
    PlaygroundComponent,
    CaseFooterComponent,
    ScrollTopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DeviceDetectorModule,
    HttpClientModule,
    EmbedVideo.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
