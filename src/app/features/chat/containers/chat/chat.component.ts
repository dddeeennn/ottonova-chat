import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from '../../../../core/services/chat.service';
import { ConversationMessage } from '../../../../shared/models/conversation-message.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  authors$: Observable<string[]> = this.service.getAuthors();
  messages$: Observable<ConversationMessage[]> = this.service.getMessages();
  currentAuthor$: Observable<string> = this.service.getCurrentAuthor();

  constructor(private service: ChatService) { }

  onSendMessage(message: string): void {
    this.service.sendMessage(message);
  }

  sendCommand(): void {
    this.service.sendCommand();
  }
}
