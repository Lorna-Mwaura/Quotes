import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../quoteclass';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class form implements OnInit {

  author!: string;
  quote!: string;
  createdBy!: string;

  addQuoteModal: any;
  @Output() addNewQuoteEvent = new EventEmitter<Quote>();

  @Input() open: Boolean = false;

  constructor() {}

  ngOnInit(): void {}
 
  addNewQuote() {
    if (this.validateForm()) {
      const quote = new Quote(
        this.author,
        this.quote,
        this.createdBy,
        new Date()
      );

      this.addNewQuoteEvent.emit(quote);
      this.author = this.quote = this.createdBy = '';
      this.addQuoteModal.hide();
      this.scrollTo('#quotes-section');
    } else {
      alert('Please fill all the details');
    }
  }

  validateForm() {
    return this.author && this.quote && this.createdBy;
  }

  scrollTo(ref: string): void {
    const elementList = document.querySelectorAll(ref);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

