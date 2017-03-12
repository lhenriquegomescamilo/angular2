import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'p[backgroundYellow]'
})
export class BackgroundYellowDirective {

  constructor(private _elementRef: ElementRef) {
    this._elementRef.nativeElement.style.backgroundColor = 'yellow';
    console.log("Só pra avisar, ainda estou aqui veio")
  }

}
