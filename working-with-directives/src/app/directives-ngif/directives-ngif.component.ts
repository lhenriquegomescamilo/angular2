import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-ngif',
  templateUrl: './directives-ngif.component.html',
  styleUrls: ['./directives-ngif.component.css']
})
export class DirectivesNgifComponent implements OnInit {
  courses: string[] = ['Angular 2'];

  showCourses: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onShowCourses() {
    this.showCourses = !this.showCourses;
  }
}
