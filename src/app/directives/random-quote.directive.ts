import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRandomQuote]'
})
export class RandomQuoteDirective {

  constructor(private elem: ElementRef) { 
    
  }

}
