import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteNComponent } from './quote-n/quote-n.component';
import { HighlightDirective } from './highlight.directive';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { TimeElapsedPipe } from './time-elapsed.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteNComponent,
    HighlightDirective,
    FormComponent,
    TimeElapsedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent,QuoteNComponent]
})
export class AppModule { }
