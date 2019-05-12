import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChatComponent } from './containers/chat/chat.component';
import { SharedModule } from '../../shared/shared.module';
import { ChatLayoutComponent } from './components/chat-layout/chat-layout.component';
import { ConversationComponent } from './components/conversation/conversation.component';
import { ConversationListItemComponent } from './components/conversation-list-item/conversation-list-item.component';

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
    ConversationListItemComponent
  ],
})
export class ChatModule { }
