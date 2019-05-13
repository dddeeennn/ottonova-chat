import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatComponent } from './chat.component';
import { PageLayoutComponent } from '../../../../shared/components/page-layout/page-layout.component';
import { ChatLayoutComponent } from '../../components/chat-layout/chat-layout.component';
import { ConversationComponent } from '../../components/conversation/conversation.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { PageContainerComponent } from '../../../../shared/components/page-container/page-container.component';
import { MaterialModule } from '../../../../material/material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AuthorListItemComponent } from '../../components/author-list-item/author-list-item.component';
import { ConversationHeaderComponent } from '../../components/conversation-header/conversation-header.component';
import { MessagesContainerComponent } from '../../components/messages-container/messages-container.component';
import { NewMessageSectionComponent } from '../../components/new-message-section/new-message-section.component';
import { CompleteWidgetComponent } from '../../components/complete-widget/complete-widget.component';
import { RateWidgetComponent } from '../../components/rate-widget/rate-widget.component';
import { StarRatingModule } from 'angular-star-rating';

describe('ChatComponent', () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChatComponent,
        PageContainerComponent,
        PageLayoutComponent,
        ChatLayoutComponent,
        AuthorListItemComponent,
        ConversationComponent,
        HeaderComponent,
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
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
