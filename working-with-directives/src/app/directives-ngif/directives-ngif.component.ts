import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-ngif',
  templateUrl: './directives-ngif.component.html',
  styleUrls: ['./directives-ngif.component.css']
})
export class DirectivesNgifComponent implements OnInit {


  courses: string[] = ['Angular 2'];

  showCourses: boolean = false;
  private _name?: string;

  constructor() {
  }

  set name(name: string){
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  ngOnInit() {
  }

  onShowCourses() {
    this.showCourses = !this.showCourses;
  }
}
