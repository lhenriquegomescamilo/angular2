import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  id: string = '';
  subscription: Subscription;

  constructor(private router: ActivatedRoute) {
    //  this.id = this.router.snapshot.params['id'];
  }

  ngOnInit() {
    this.subscription = this.router
      .params
      .subscribe((params: any) => {
        this.id = params['id'];
      });
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
