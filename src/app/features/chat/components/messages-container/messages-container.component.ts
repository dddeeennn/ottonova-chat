import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ConversationMessage } from '../../../../shared/models/conversation-message.model';
import { AuthorType } from '../../../../shared/models/author-type.enum';
import { CommandType } from '../../../../shared/models/command-type.enum';
import { ResponseMessage } from '../../../../shared/models/response-message.model';

@Component({
  selector: 'app-messages-container',
  templateUrl: './messages-container.component.html',
  styleUrls: ['./messages-container.component.scss']
})
export class MessagesContainerComponent {
  @Input() messages: ConversationMessage[] = [];

  @Output() sendMessage = new EventEmitter<ResponseMessage>();

  AuthorType = AuthorType;
  CommandType = CommandType;
}
