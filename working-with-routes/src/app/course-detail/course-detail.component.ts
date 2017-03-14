import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Rx";
import {CourseService} from "../course/course.service";
import * as _ from 'lodash';
@Component({
  selector: 'app-course-detail',
  templateUrl: 'course-detail.component.html',
  styleUrls: ['course-detail.component.css']
})
export class CourseDetailComponent implements OnInit,  OnDestroy {
  id: string = '';

  subscription: Subscription;
  private _course: any;
  constructor(private router: ActivatedRoute, private _courseService: CourseService, private _router: Router) {
    //  this.id = this.router.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.subscription = this.router
      .params
      .subscribe((params: any) => {
        this.id = params['id'];
        this._course = this._courseService.findCourseById(_.toNumber(this.id));
        if(_.isNull(this._course)){
          // Redirecionar para alguma tela de not-found
            this._router.navigate(['/login'])
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  get course(): any {
    return this._course;
  }

}
