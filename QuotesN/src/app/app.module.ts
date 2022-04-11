import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteNComponent } from './quote-n/quote-n.component';
import { HighlightDirective } from './highlight.directive';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { TimeElapsedPipe } from './time-elapsed.pipe';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { BackgroundComponent } from './background/background.component';


@NgModule({
  declarations: [
    AppComponent,
    QuoteNComponent,
    HighlightDirective,
    FormComponent,
    TimeElapsedPipe,
    QuoteDetailsComponent,
    BackgroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // TimeElapsedPipe
    
  ],
  providers: [],
  bootstrap: [AppComponent,QuoteNComponent]
})
export class AppModule { }
