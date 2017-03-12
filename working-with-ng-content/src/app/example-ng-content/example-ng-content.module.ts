import { ExampleNgContentComponent } from './example-ng-content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ExampleNgContentComponent],
  exports: [ExampleNgContentComponent]
})
export class ExampleNgContentModule { }
