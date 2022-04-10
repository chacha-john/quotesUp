import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/classes/quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[]
  constructor() { 
    this.quotes = [
      new Quote(1,"small daily, seeming insignificant, improvements when done consistently over time yield staggerring results","robin sharma","chacha"),
      new Quote(1,"small daily, seeming insignificant, improvements when done consistently over time yield staggerring results","robin sharma","chacha"),
      new Quote(1,"small daily, seeming insignificant, improvements when done consistently over time yield staggerring results","robin sharma","chacha"),
      new Quote(1,"small daily, seeming insignificant, improvements when done consistently over time yield staggerring results","robin sharma","chacha"),
      new Quote(1,"small daily, seeming insignificant, improvements when done consistently over time yield staggerring results","robin sharma","chacha")
    ]
  }

  ngOnInit(): void {
  }

}
