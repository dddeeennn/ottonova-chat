import { CommandType } from './command-type.enum';

export interface ResponseMessage {
  id: number;
  text: string;
  type: CommandType;
}
