import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecieverCourseComponent } from './reciever-course.component';

describe('RecieverCourseComponent', () => {
  let component: RecieverCourseComponent;
  let fixture: ComponentFixture<RecieverCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecieverCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecieverCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
