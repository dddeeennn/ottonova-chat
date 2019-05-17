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
import { CompleteWidgetComponent } from './components/widgets/complete-widget/complete-widget.component';
import { RateWidgetComponent } from './components/widgets/rate-widget/rate-widget.component';
import { MapWidgetComponent } from './components/widgets/map-widget/map-widget.component';
import { DateWidgetComponent } from './components/widgets/date-widget/date-widget.component';
import { AuthGuard } from '../../core/guards/auth.guard';

const routes = [
  {
    path: '',
    component: ChatComponent,
    canActivate: [AuthGuard],
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
    RateWidgetComponent,
    MapWidgetComponent,
    DateWidgetComponent,
  ],
})
export class ChatModule { }
