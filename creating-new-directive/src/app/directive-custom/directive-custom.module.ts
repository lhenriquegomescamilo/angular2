import { BackgroundYellowDirective } from './../shared/background-yellow.directive';
import { DirectiveCustomComponent } from './directive-custom.component';
import { NgModule, Directive } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [DirectiveCustomComponent, BackgroundYellowDirective],
  exports: [DirectiveCustomComponent]
})
export class DirectiveCustomModule { }
