import { CoursesService } from './../courses/courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css'],
  providers: [CoursesService]
})
export class CreateCourseComponent implements OnInit {


  private courses: string[] = [];


  constructor(private courseService: CoursesService) { }

  ngOnInit() {
    this.courses = this.courseService.getCourses();
    this.courseService
      .getEmitterCourseCreated()
      .subscribe(course => this.courseService.addCourse(course));

  }

  addCourse(course: string): void {
    this.courseService.notifyToAdd(course);
  }
}
