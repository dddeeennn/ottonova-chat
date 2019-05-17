import { CommandType } from './command-type.enum';
import { MapLocation } from './map-location.model';

export interface CommandPayload {
  type: CommandType;
  data: string | MapLocation | number[] | string[];
}
