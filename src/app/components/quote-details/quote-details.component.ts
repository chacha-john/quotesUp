import { Component, Input, OnInit } from '@angular/core';
import { Quote } from 'src/app/classes/quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote!: Quote

  upVote(){
    if(this.quote.upvotes==1){
      this.quote.upvotes=0
    }else if(this.quote.upvotes==0){
      this.quote.upvotes = + 1
      this.quote.downvotes = 0
    }
    
  }
  downVote(){
    if(this.quote.downvotes==1){
      this.quote.downvotes=0
    }else if(this.quote.downvotes==0){
      this.quote.downvotes = + 1
      this.quote.upvotes = 0
    }
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
