import { CoursesService } from './../courses/courses.service';
import { CreateCourseComponent } from './create-course.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecieverCourseComponent } from './reciever-course/reciever-course.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CreateCourseComponent, RecieverCourseComponent],
  exports: [CreateCourseComponent],
  providers: [CoursesService]
})
export class CreateCourseModule { }
