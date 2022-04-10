import { Component, Input, OnInit, Output, EventEmitter, SimpleChange } from '@angular/core';
import { Quote } from '../quoteclass';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
})
export class QuoteComponent implements OnInit {
  @Input() quote!: Quote;

  @Output() deleteQuoteEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  deleteQuote() {
    this.deleteQuoteEvent.emit(this.quote.id);
  }

  ngOnChanges(changes: SimpleChange) {
    console.log(changes);
  }
}