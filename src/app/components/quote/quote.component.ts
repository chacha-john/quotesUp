import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from 'src/app/classes/quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[]
  toggleDetails(index:number){
    this.quotes[index].showDetails = !this.quotes[index].showDetails
  }
  // @Output() toDelete = new EventEmitter<boolean>()

  deleteQuote(index:number){
    if(confirm(`Are you sure you want to delete the quote "${this.quotes[index].quote}"?`)){
      this.quotes.splice(index,1)
    }
    // this.toDelete.emit(toRemove)
  }
  addNewQuote(quote:Quote){
    let quoteLength = this.quotes.length
    quote.id = quoteLength+1
    this.quotes.push(quote)
  }
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
