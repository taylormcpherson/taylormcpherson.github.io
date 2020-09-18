import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { WorkComponentComponent } from "./work/work-component.component";
import { ResumeComponent } from "./resume/resume.component";
import {CriticalDesignComponent} from "./case-study/critical-design/critical-design.component";
import {GroupSchedulingComponent} from "./case-study/group-scheduling/group-scheduling.component";
import {ApprenticeshipLearningComponent} from "./case-study/apprenticeship-learning/apprenticeship-learning.component";
import {PlaygroundComponent} from "./case-study/playground/playground.component";



const routes: Routes = [
  { path: 'work', component: WorkComponentComponent },
  { path: 'about', component: AboutComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'critical-design', component: CriticalDesignComponent},
  { path: 'group-scheduling', component: GroupSchedulingComponent},
  { path: 'apprenticeship-learning', component: ApprenticeshipLearningComponent},
  { path: 'side-projects', component: PlaygroundComponent},
  { path: '', redirectTo: '/work', pathMatch: 'full' },
  { path: '**', redirectTo: '/work', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
