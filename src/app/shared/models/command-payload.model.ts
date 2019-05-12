import { CommandType } from './command-type.enum';

export interface CommandPayload {
  type: CommandType;
  data: Date | Location | number | string;
}
