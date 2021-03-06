import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ConversationMessage } from '../../../../shared/models/conversation-message.model';
import { ResponseMessage } from '../../../../shared/models/response-message.model';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent {
  @Input() author: string;
  @Input() messages: ConversationMessage[] = [];
  @Input() isMobile: boolean;

  @Output() sendMessage = new EventEmitter<ResponseMessage>();
  @Output() sendCommand = new EventEmitter<void>();
  @Output() showList = new EventEmitter<void>();
}
