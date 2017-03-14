import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CourseDetailComponent} from '../course-detail/course-detail.component';

import {CourseComponent} from './course.component';
import {CourseService} from "./course.service";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [CourseService],
  declarations: [CourseComponent, CourseDetailComponent],
  exports: [CourseComponent, CourseDetailComponent]
})
export class CourseModule {

}
