import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ResponseMessage } from '../../../../../shared/models/response-message.model';

@Component({
  selector: 'app-date-widget',
  templateUrl: './date-widget.component.html',
  styleUrls: ['./date-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateWidgetComponent {
  @Input() id: number;
  @Input() model: string;

  allDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  get currentDay(): number {
    return this.model ? new Date(this.model).getDay() - 1 : 0;
  }

  get days(): string[] {
    return this.allDays.slice(this.currentDay).concat(this.allDays.slice(0, this.currentDay));
  }

  @Output() sendMessage = new EventEmitter<ResponseMessage>();

  onClick(day: string): void {
    this.sendMessage.emit({ id: this.id, text: `${day} is your day.` });
  }
}
