import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChatComponent } from './containers/chat/chat.component';
import { SharedModule } from '../../shared/shared.module';
import { ChatLayoutComponent } from './components/chat-layout/chat-layout.component';
import { ConversationComponent } from './components/conversation/conversation.component';
import { ConversationHeaderComponent } from './components/conversation-header/conversation-header.component';
import { MessagesContainerComponent } from './components/messages-container/messages-container.component';
import { NewMessageSectionComponent } from './components/new-message-section/new-message-section.component';
import { AuthorListItemComponent } from './components/author-list-item/author-list-item.component';
import { CompleteWidgetComponent } from './components/complete-widget/complete-widget.component';

const routes = [
  {
    path: '',
    component: ChatComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ],
  providers: [
  ],
  declarations: [
    ChatComponent,
    ChatLayoutComponent,
    ConversationComponent,
    ConversationHeaderComponent,
    MessagesContainerComponent,
    NewMessageSectionComponent,
    AuthorListItemComponent,
    CompleteWidgetComponent,
  ],
})
export class ChatModule { }
