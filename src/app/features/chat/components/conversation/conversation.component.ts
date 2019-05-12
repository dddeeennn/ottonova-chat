import { Component, Input } from '@angular/core';
import { ConversationMessage } from '../../../../shared/models/conversation-message.model';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent {
  @Input() messages: ConversationMessage[] = [];
}
