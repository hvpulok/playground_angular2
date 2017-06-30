import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  @Input() defaultColor = 'lightBlue';

  @Input('appHighlighter') highlightColor;

  constructor(private el: ElementRef) {
    this.highlight('white')  // initialize with default highlight color
  }

  @HostListener('mouseenter') onmouseenter() {
    this.highlight(this.highlightColor);
  }

  @HostListener('mouseleave') onmouseleave() {
    this.highlight('white');
  }

  highlight(color?: string) {
    this.el.nativeElement.style.backgroundColor = color || this.defaultColor;
    this.el.nativeElement.style.padding = '10px';
  }
}
