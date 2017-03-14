import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {

  constructor() {
    console.log('Só pra constar, eu fui injetado');
  }


  getCourses(){
    return [
      {id: 1, name : 'Angular2'},
      {id: 2, name : 'Java'},
    ];
  }
}
