import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class CourseService {

  private _courses: any[] = [
    {id: 1, name : 'Angular2'},
    {id: 2, name : 'Java'},
  ];
  constructor() {
    console.log('Só pra constar, eu fui injetado');
  }

  findCourseById(id: number): any{
    return _.find(this._courses, course => _.isEqual(id, course.id));
  }

  getCourses(): any[]{
    return this._courses;
  }
}
