import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../../shared/models/message.model';
import { Command } from '../../shared/models/command.model';
import { WebSocketService } from './web-socket.service';
import { EventType } from '../../shared/models/event-type.enum';
import { AuthorType } from '../../shared/models/author-type.enum';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private socket: WebSocketService) { }

  getMessage(): Observable<Message> {
    return this.socket
      .fromEvent<Message>(EventType.Message);
  }

  getCommand(): Observable<Command> {
    return this.socket
      .fromEvent<Command>(EventType.Command);
  }

  sendMessage(msg: string): void {
    const message = {
      author: AuthorType.Client,
      message: msg,
    } as Message;

    this.socket.emit(EventType.Message, message);
  }
}
