import { Component } from '@angular/core';
import { ChatService } from '../../../../core/services/chat.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  messages$ = of([{autor: 'client', message: 'hey'}]);
  commands$ = this.service.getCommand();

  constructor(private service: ChatService) { }

  sendMessage(): void {
    this.service.sendMessage(new Date().toDateString());
  }

  sendCommand(): void {
    this.service.sendCommand();
  }
}
