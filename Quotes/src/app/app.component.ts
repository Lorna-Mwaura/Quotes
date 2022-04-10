import { Component } from '@angular/core';
import{ Quote } from './quoteclass'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';

  openModal: Boolean = false;
  quotes = [
    new Quote(
      'Kobe',
      'The moment you give up, is the moment you let someone else win',
      'Lona Wanjiku',
      new Date('2022-04-10T18:03:00')
    ),
    new Quote(
      'Oscar Wilde',
      'It is what you read when you don’t have to that determines what you will be when you can’t help it.',
      'Lona Mwaura',
      new Date('2022-04-9T18:03:00')
    ),
    new Quote(
      'John Keats',
      'I was never afraid of failure; for I would sooner fail than not be among the greatest.',
      'John Keats',
      new Date('2022-04-10T18:03:00')
    ),
    new Quote(
      'Toni Morrison',
      "If there's a book that you want to read, but it hasn't been written yet, then you must write it.",
      'Lona Wanjiku',
      new Date('2021-12-25T18:03:00')
    ),
  ];
  addQuote(quote: Quote) {
    this.quotes.unshift(quote);
  }
}

