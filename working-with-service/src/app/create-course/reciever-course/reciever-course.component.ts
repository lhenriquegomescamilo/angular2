import { CoursesService } from './../../courses/courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reciever-course',
  templateUrl: './reciever-course.component.html',
  styleUrls: ['./reciever-course.component.css']
})
export class RecieverCourseComponent implements OnInit {

  private _course: string = '';

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.coursesService
        .getEmitterCourseCreated()
        .subscribe(courseCreated => this._course = courseCreated);
  }

  get course  (): string {
    return this._course;
  }

}
