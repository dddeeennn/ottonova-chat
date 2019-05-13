import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationComponent } from './conversation.component';
import { ConversationHeaderComponent } from '../conversation-header/conversation-header.component';
import { MessagesContainerComponent } from '../messages-container/messages-container.component';
import { NewMessageSectionComponent } from '../new-message-section/new-message-section.component';
import { MaterialModule } from '../../../../material/material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CompleteWidgetComponent } from '../complete-widget/complete-widget.component';
import { RateWidgetComponent } from '../rate-widget/rate-widget.component';
import { StarRatingModule } from 'angular-star-rating';

describe('ConversationComponent', () => {
  let component: ConversationComponent;
  let fixture: ComponentFixture<ConversationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ConversationComponent,
        ConversationHeaderComponent,
        MessagesContainerComponent,
        NewMessageSectionComponent,
        CompleteWidgetComponent,
        RateWidgetComponent,
      ],
      imports: [
        MaterialModule,
        NoopAnimationsModule,
        StarRatingModule.forRoot(),
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
