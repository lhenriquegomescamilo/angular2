import {Component, OnInit} from '@angular/core';
import {CourseService} from "./course.service";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  private _courses: any[];

  constructor(private _courseService: CourseService) {
  }

  ngOnInit() {
    this._courses = this._courseService.getCourses();
  }

  get courses(): any[] {
    return this._courses;
  }

  set courses(value: any[]) {
    this._courses = value;
  }
}
