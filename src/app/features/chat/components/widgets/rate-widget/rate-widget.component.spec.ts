import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateWidgetComponent } from './rate-widget.component';
import { StarRatingModule } from 'angular-star-rating';

describe('RateWidgetComponent', () => {
  let component: RateWidgetComponent;
  let fixture: ComponentFixture<RateWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RateWidgetComponent],
      imports: [
        StarRatingModule.forRoot(),
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
