import { Component } from '@angular/core';
import { ChatService } from '../core/services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  messages$ = this.service.getMessage();
  commands$ = this.service.getCommand();

  constructor(private service: ChatService) { }

  sendMessage(): void {
    this.service.sendMessage(new Date().toDateString());
  }
}
