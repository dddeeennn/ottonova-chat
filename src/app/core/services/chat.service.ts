import { Injectable } from '@angular/core';
import { Observable, Subscription, of, Subject, BehaviorSubject } from 'rxjs';
import { Message } from '../../shared/models/message.model';
import { Command } from '../../shared/models/command.model';
import { WebSocketService } from './web-socket.service';
import { EventType } from '../../shared/models/event-type.enum';
import { AuthorType } from '../../shared/models/author-type.enum';
import { CommandType } from '../../shared/models/command-type.enum';
import { tap, map } from 'rxjs/operators';
import { ConversationMessage } from '../../shared/models/conversation-message.model';
import { MessageBase } from '../../shared/models/message-base.model';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private subs: Subscription[] = [];

  authors = new Set<string>([AuthorType.Bot]);
  currentAuthor = AuthorType.Bot as string;
  messages: Array<ConversationMessage> = [];
  authorsSubject = new BehaviorSubject<string[]>([this.currentAuthor]);
  messagesSubject = new Subject<ConversationMessage[]>();
  currentAuthorSubject = new BehaviorSubject<string>(this.currentAuthor);

  constructor(private socket: WebSocketService) {
    this.subs = [
      this.socket
        .fromEvent<Message>(EventType.Message).pipe(
          tap(data => this.handleAuthor(data)),
          tap(data => this.messages.push({
            author: data.author,
            timestamp: new Date(),
            originator: AuthorType.Bot,
            payload: {
              type: CommandType.Message,
              data: data.message,
            }
          })),
          tap(() => this.messagesSubject.next(this.messages)),
        ).subscribe(),
      this.socket
        .fromEvent<Command>(EventType.Command).pipe(
          tap(data => this.handleAuthor(data)),
          tap(data => this.messages.push({
            author: data.author,
            timestamp: new Date(),
            originator: AuthorType.Bot,
            payload: data.command,
          })),
          tap(() => this.messagesSubject.next(this.messages)),
        ).subscribe(),
    ];
  }

  getMessages(): Observable<ConversationMessage[]> {
    return this.messagesSubject
      .asObservable()
      .pipe(
        map(messages => messages.filter(message => [this.currentAuthor, AuthorType.Client].includes(message.author)))
      );
  }

  getAuthors(): Observable<string[]> {
    return this.authorsSubject.asObservable();
  }

  getCurrentAuthor(): Observable<string> {
    return this.currentAuthorSubject.asObservable();
  }

  sendMessage(messageText: string): void {
    this.messages.push({
      author: AuthorType.Client,
      timestamp: new Date(),
      originator: AuthorType.Client,
      payload: {
        type: CommandType.Message,
        data: messageText,
      }
    });
    this.messagesSubject.next(this.messages);
    const message = {
      author: AuthorType.Client,
      message: messageText,
    }
    this.socket.emit(EventType.Message, message);
  }

  sendCommand(): void {
    this.socket.emit(EventType.Command, {
      author: AuthorType.Client,
      command: {
        type: CommandType.Date,
        data: new Date().toISOString(),
      }
    } as Command);
  }

  handleAuthor(message: MessageBase): void {
    if (!this.authors.size) {
      this.currentAuthor = message.author;
      this.currentAuthorSubject.next(message.author);
    }

    this.authors.add(message.author);

    if (this.authors.has(message.author)) {
      this.authorsSubject.next(Array.from(this.authors));
    }
  }
}
