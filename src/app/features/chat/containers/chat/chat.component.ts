import { Component } from '@angular/core';
import { ChatService } from '../../../../core/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  messages$ = this.service.getMessage();
  commands$ = this.service.getCommand();

  constructor(private service: ChatService) { }

  sendMessage(): void {
    this.service.sendMessage(new Date().toDateString());
  }

  sendCommand(): void {
    this.service.sendCommand();
  }
}
