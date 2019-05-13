import { MessageBase } from './message-base.model';
import { AuthorType } from './author-type.enum';
import { CommandPayload } from './command-payload.model';

export class ConversationMessage implements MessageBase {
  timestamp: Date = new Date();
  id = this.timestamp.getTime();

  constructor(public originator: AuthorType, public author: string, public payload: CommandPayload) { }
}
