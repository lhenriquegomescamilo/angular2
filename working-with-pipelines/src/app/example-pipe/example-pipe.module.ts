import { ExamplePipeComponent } from './example-pipe.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ExamplePipeComponent],
  exports: [ExamplePipeComponent]
})
export class ExamplePipeModule { }
