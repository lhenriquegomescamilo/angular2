import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'p[backgroundYellow]'
})
export class BackgroundYellowDirective {

  constructor(private _elementRef: ElementRef, private _renderer: Renderer) {
    //this._elementRef.nativeElement.style.backgroundColor = 'yellow';
    //console.log("Só pra avisar, ainda estou aqui veio")

    this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow'
    );
  }

}
