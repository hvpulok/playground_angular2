import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.color = 'red';
  }

}
