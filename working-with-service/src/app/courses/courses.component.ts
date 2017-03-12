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
    this.courses = this.courseService.getCourses();
  }

}
