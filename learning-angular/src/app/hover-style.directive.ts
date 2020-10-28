import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverStyle]'
})
export class HoverStyleDirective implements OnInit{
  @Input () type: string;

  constructor(private elm: ElementRef) {
  }

  ngOnInit(): void {
  }
@HostListener('mouseenter') onHover(): void{
    if (this.type === 'title'){
      this.elm.nativeElement.style.textDecoration = 'underline';
    } else if (this.type === 'tags'){
      this.elm.nativeElement.style.fontWeight = 'bold';
    }
}
@HostListener('mouseleave') onLeave(): void{
  if (this.type === 'title'){
    this.elm.nativeElement.style.textDecoration = 'none';
  } else if (this.type === 'tags'){
    this.elm.nativeElement.style.fontWeight = 'normal';
  }
}

}
