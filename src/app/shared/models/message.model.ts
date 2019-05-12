import { MessageBase } from './message-base.model';

export interface Message extends MessageBase {
  message: string;
}
