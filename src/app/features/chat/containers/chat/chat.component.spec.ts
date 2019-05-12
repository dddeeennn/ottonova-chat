import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatComponent } from './chat.component';
import { PageLayoutComponent } from '../../../../shared/components/page-layout/page-layout.component';
import { ChatLayoutComponent } from '../../components/chat-layout/chat-layout.component';
import { ConversationListItemComponent } from '../../components/conversation-list-item/conversation-list-item.component';
import { ConversationComponent } from '../../components/conversation/conversation.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { PageContainerComponent } from '../../../../shared/components/page-container/page-container.component';
import { MaterialModule } from '../../../../material/material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

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
        ConversationListItemComponent,
        ConversationComponent,
        HeaderComponent,
      ],
      imports: [
        MaterialModule,
        NoopAnimationsModule,
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
