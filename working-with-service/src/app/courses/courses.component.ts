import { CoursesService } from './courses.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: string[] = [];


  constructor(private courseService: CoursesService) {
  }

  ngOnInit() {
    this.courseService
      .getEmitterCourseCreated()
      .subscribe(course => this.courseService.addCourse(course));
    this.courses = this.courseService.getCourses();
  }

}
