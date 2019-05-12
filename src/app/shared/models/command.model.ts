import { CommandPayload } from './command-payload.model';
import { MessageBase } from './message-base.model';

export interface Command extends MessageBase {
  command: CommandPayload;
}
