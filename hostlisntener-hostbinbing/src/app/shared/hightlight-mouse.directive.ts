import { Directive, HostListener, HostBinding, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appHightlightMouse]'
})
export class HightlightMouseDirective {

  @HostBinding('style.backgroundColor')
  backgroundColor: string = '';

  constructor(private _elementRef: ElementRef, private _renderer: Renderer) {
  }

  @HostListener('mouseenter')
  onMouseOver(): void {
    //  this._renderer
      //  .setElementStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
      this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    //  this._renderer
    //   .setElementStyle(this._elementRef.nativeElement, 'background-color', 'white');
    this.backgroundColor = 'white';
  }

} 
