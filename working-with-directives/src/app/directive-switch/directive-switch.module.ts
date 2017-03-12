import { DirectiveSwitchComponent } from './directive-switch.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DirectiveSwitchComponent],
  exports: [DirectiveSwitchComponent]
})
export class DirectiveSwitchModule { }
