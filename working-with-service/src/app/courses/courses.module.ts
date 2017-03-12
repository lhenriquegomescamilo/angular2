import { CoursesService } from './courses.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesComponent } from './courses.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoursesComponent],
  exports: [CoursesComponent],
  providers: [CoursesService]
})
export class CoursesModule { }
