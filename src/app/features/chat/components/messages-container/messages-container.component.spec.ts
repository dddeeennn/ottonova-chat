import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesContainerComponent } from './messages-container.component';
import { MaterialModule } from '../../../../material/material.module';
import { CompleteWidgetComponent } from '../widgets/complete-widget/complete-widget.component';
import { RateWidgetComponent } from '../widgets/rate-widget/rate-widget.component';
import { StarRatingModule } from 'angular-star-rating';

describe('MessagesContainerComponent', () => {
  let component: MessagesContainerComponent;
  let fixture: ComponentFixture<MessagesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MessagesContainerComponent,
        CompleteWidgetComponent,
        RateWidgetComponent,
      ],
      imports: [
        MaterialModule,
        StarRatingModule.forRoot(),
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
