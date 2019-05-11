import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
import { environment } from '../../../environments/environment';
import { EventType } from '../../shared/models/event-type.enum';
import { MessageBase } from '../../shared/models/message-base.model';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private socket;

  constructor() {
    this.socket = io(environment.apiUrl);
  }

  fromEvent<T extends MessageBase>(type: EventType): Observable<T> {
    return new Observable(observer => {
      this.socket.on(type, (data: T) => {
        console.log('Received message');
        console.log(data);
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
  }

  emit(type: EventType, message: MessageBase): void {
    console.log('Emit message');
    console.log(message);
    this.socket.emit(type, JSON.stringify(message));
  }
}
