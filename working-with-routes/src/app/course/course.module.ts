import { CourseComponent } from './course.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseDetailComponent } from '../course-detail/course-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CourseComponent, CourseDetailComponent],
  exports: [CourseComponent, CourseDetailComponent]
})
export class CourseModule { }
