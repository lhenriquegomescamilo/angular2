import { CreateCourseModule } from './create-course/create-course.module';
import { CoursesModule } from './courses/courses.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { LogService } from './shared/log.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoursesModule,
    CreateCourseModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
