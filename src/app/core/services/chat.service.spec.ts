import { TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { AuthorType } from '../../shared/models/author-type.enum';
import { CommandType } from '../../shared/models/command-type.enum';
import { Command } from '../../shared/models/command.model';
import { EventType } from '../../shared/models/event-type.enum';
import { Message } from '../../shared/models/message.model';
import { AuthService } from './auth.service';
import { ChatService } from './chat.service';
import { WebSocketService } from './web-socket.service';

describe('ChatService', () => {
  let chatService: ChatService;
  let webSocketSpy: jasmine.SpyObj<WebSocketService>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let messageSubject: Subject<Message>;
  let commandSubject: Subject<Command>;

  beforeEach(() => {
    webSocketSpy = jasmine.createSpyObj('WebSocketService', ['fromEvent', 'emit']);
    authServiceSpy = jasmine.createSpyObj('AuthService', ['user']);
    messageSubject = new Subject();
    commandSubject = new Subject();

    webSocketSpy.fromEvent
      .and
      .callFake((type: EventType) => type === EventType.Message ? messageSubject : commandSubject);

    TestBed.configureTestingModule({
      providers: [
        ChatService,
        { provide: WebSocketService, useValue: webSocketSpy },
        { provide: AuthService, useValue: authServiceSpy },
      ]
    });

    chatService = TestBed.get(ChatService);
  });

  it('get messages should return stubbed value from a spy', (done: DoneFn) => {
    const message: Message = { author: AuthorType.Bot, message: "Hey admin, you said 'w', right?" };
    messageSubject.next(message);

    chatService.getMessages().subscribe(messages => {
      const actual = messages[0];

      expect(messages.length).toBe(1);
      expect(actual.timestamp).toBeTruthy();
      expect(actual.originator).toBe(message.author);
      expect(actual.payload).toBeTruthy();
      expect(actual.payload.type).toBe(CommandType.Message);
      expect(actual.payload.data).toBe(message.message);
      done();
    });

  });

  it('get messages should return all accumulated messages from a spy', (done: DoneFn) => {
    const message1: Message = { author: AuthorType.Bot, message: "m1" };
    const message2: Message = { author: AuthorType.Bot, message: "m2" };

    messageSubject.next(message1);
    messageSubject.next(message2);

    chatService.getMessages().subscribe(messages => {
      expect(messages.length).toBe(2);
      expect(messages[0].payload.data).toBe(message1.message);
      expect(messages[1].payload.data).toBe(message2.message);
      done();
    });
  });

  it('get messages should return authors from a spy', (done: DoneFn) => {
    const message1: Message = { author: AuthorType.Bot, message: "m1" };


    messageSubject.next(message1);

    chatService.getAuthors().subscribe(authors => {
      expect(authors.length).toBe(1);

      const actual = authors[0];

      expect(actual).toBe(AuthorType.Bot);
      done();
    });
  });

  it('sendMessage should append message on client command response', (done: DoneFn) => {
    const commandResponse =
    {
      id: 1,
      text: 'You rated us 4. Thank you!',
      type: CommandType.Rate,
    };

    chatService.sendMessage(commandResponse);
    chatService.getMessages().subscribe(messages => {
      expect(messages.length).toBe(1);

      const actual = messages[0];

      expect(actual.timestamp).toBeTruthy();
      expect(actual.originator).toBe(AuthorType.Client);
      expect(actual.payload).toBeTruthy();
      expect(actual.payload.type).toBe(CommandType.Message);
      expect(actual.payload.data).toBe(commandResponse.text);

      expect(webSocketSpy.emit.calls.count()).toBe(0);

      done();
    });
  });

  it('sendMessage should emit message on client message', () => {
    const message =
    {
      id: 1,
      text: 'message text',
      type: CommandType.Message,
    };

    chatService.sendMessage(message);

    expect(webSocketSpy.emit.calls.count()).toBe(1);
  });
});
