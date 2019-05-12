import { MessageBase } from './message-base.model';
import { AuthorType } from './author-type.enum';
import { CommandPayload } from './command-payload.model';

export interface ConversationMessage extends MessageBase {
  timestamp: Date;
  originator: AuthorType;
  payload: CommandPayload;
}
