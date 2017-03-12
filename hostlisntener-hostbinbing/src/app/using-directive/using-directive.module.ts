import { HightlightMouseDirective } from './../shared/hightlight-mouse.directive';
import { UsingDirectiveComponent } from './using-directive.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [UsingDirectiveComponent, HightlightMouseDirective],
  exports: [UsingDirectiveComponent]
})
export class UsingDirectiveModule { }
