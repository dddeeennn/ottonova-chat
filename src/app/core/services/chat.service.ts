import { Injectable } from '@angular/core';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import { Message } from '../../shared/models/message.model';
import { Command } from '../../shared/models/command.model';
import { WebSocketService } from './web-socket.service';
import { EventType } from '../../shared/models/event-type.enum';
import { AuthorType } from '../../shared/models/author-type.enum';
import { CommandType } from '../../shared/models/command-type.enum';
import { tap, map } from 'rxjs/operators';
import { ConversationMessage } from '../../shared/models/conversation-message.model';
import { MessageBase } from '../../shared/models/message-base.model';
import { ResponseMessage } from '../../shared/models/response-message.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private subs: Subscription[] = [];

  authors = new Set<string>([AuthorType.Bot]);
  currentAuthor = AuthorType.Bot as string;
  messages: Array<ConversationMessage> = [];
  authorsSubject = new BehaviorSubject<string[]>([this.currentAuthor]);
  messagesSubject = new BehaviorSubject<ConversationMessage[]>(this.messages);
  currentAuthorSubject = new BehaviorSubject<string>(this.currentAuthor);

  constructor(private socket: WebSocketService, private authService: AuthService) {
    this.subs = [
      this.socket
        .fromEvent<Message>(EventType.Message).pipe(
          tap(data => this.handleAuthor(data)),
          tap(data => this.messages.push(
            new ConversationMessage(AuthorType.Bot, AuthorType.Bot, {
              type: CommandType.Message,
              data: data.message,
            }))),
          tap(() => this.messagesSubject.next(this.messages)),
        ).subscribe(),
      this.socket
        .fromEvent<Command>(EventType.Command).pipe(
          tap(data => this.handleAuthor(data)),
          tap(data => this.messages.push(new ConversationMessage(data.author as AuthorType, AuthorType.Bot, data.command))),
          tap(() => this.messagesSubject.next(this.messages)),
        ).subscribe(),
    ];
  }

  getMessages(): Observable<ConversationMessage[]> {
    return this.messagesSubject
      .asObservable()
      .pipe(
        map(messages => messages.filter(message => [this.currentAuthor, this.authService.user].includes(message.author)))
      );
  }

  getAuthors(): Observable<string[]> {
    return this.authorsSubject.asObservable();
  }

  getCurrentAuthor(): Observable<string> {
    return this.currentAuthorSubject.asObservable();
  }

  sendMessage(message: ResponseMessage): void {
    this.handleResponseMessage(message);

    if (message.type !== CommandType.Message) {
      return;
    }

    const toEmit = {
      author: this.authService.user,
      message: message.text,
    };
    this.socket.emit(EventType.Message, toEmit);
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

  private handleAuthor(message: MessageBase): void {
    if (!this.authors.size) {
      this.currentAuthor = message.author;
      this.currentAuthorSubject.next(message.author);
    }

    this.authors.add(message.author);

    if (this.authors.has(message.author)) {
      this.authorsSubject.next(Array.from(this.authors));
    }
  }

  private handleResponseMessage(message: ResponseMessage): void {
    this.messages = this.messages.filter(x => x.id !== message.id);

    this.messages.push(
      new ConversationMessage(AuthorType.Client, this.authService.user, {
        type: CommandType.Message,
        data: message.text,
      }));

    this.messagesSubject.next(this.messages);
  }
}
