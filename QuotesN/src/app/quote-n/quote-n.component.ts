import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import{Quote} from '../quote';
@Component({
  selector: 'app-quote-n',
  templateUrl: './quote-n.component.html',
  styleUrls: ['./quote-n.component.css']
})
export class QuoteNComponent implements OnInit {
  @Input() quote!:Quote;
  @Output() isComplete = new EventEmitter<boolean>();
quotes:Quote[] = [
  new Quote(1,"Your journey begins with a choice to get up,step up and live fully","Oprah Winfrey","",0,0,new Date(2022,4,10)),
  new Quote(2,"Don't let the scale define you.Be active Eat Healthy and Be happy","Juice Wrld","",0,0, new Date(2019,5,7)),
  new Quote(3,"It always seems impossible untill it's done","Nelson Mandela","",0,0,new Date(1995,10,8))

]
addNewQuote(quote: Quote) {
  quote.author = ""
  quote.publisher =""
  quote.quote=""
  this.quotes.push(quote)
}
arr:number[] = this.quotes.map(quote=>quote.upvotes)
  constructor() { }
highest = Math.max(...this.arr)
  ngOnInit(): void {
  }

}
