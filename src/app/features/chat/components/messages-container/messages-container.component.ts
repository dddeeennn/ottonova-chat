import { Component, Input } from '@angular/core';
import { ConversationMessage } from '../../../../shared/models/conversation-message.model';
import { AuthorType } from '../../../../shared/models/author-type.enum';
import { CommandType } from '../../../../shared/models/command-type.enum';

@Component({
  selector: 'app-messages-container',
  templateUrl: './messages-container.component.html',
  styleUrls: ['./messages-container.component.scss']
})
export class MessagesContainerComponent {
  @Input() messages: ConversationMessage[] = [];

  AuthorType = AuthorType;
  CommandType = CommandType;
}
