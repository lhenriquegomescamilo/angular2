import { Directive, HostListener, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appHightlightMouse]'
})
export class HightlightMouseDirective {
  constructor(private _elementRef: ElementRef, private _renderer: Renderer) {
  }

  @HostListener('mouseenter')
  onMouseOver() : void{
    this._renderer
      .setElementStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('mouseleave')
  onMouseLeave() : void {
    this._renderer
      .setElementStyle(this._elementRef.nativeElement,'background-color','white');
  }

}
