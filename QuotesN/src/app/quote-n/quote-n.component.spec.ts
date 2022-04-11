import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteNComponent } from './quote-n.component';

describe('QuoteNComponent', () => {
  let component: QuoteNComponent;
  let fixture: ComponentFixture<QuoteNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
