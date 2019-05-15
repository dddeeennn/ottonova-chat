import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ResponseMessage } from '../../../../../shared/models/response-message.model';
import { CommandType } from '../../../../../shared/models/command-type.enum';

@Component({
  selector: 'app-rate-widget',
  templateUrl: './rate-widget.component.html',
  styleUrls: ['./rate-widget.component.scss'],
})
export class RateWidgetComponent {
  @Input() id: number;
  @Input() model = [0, 5];

  @Output() sendMessage = new EventEmitter<ResponseMessage>();

  onClick(event: { rating: number }): void {
    setTimeout(() => this.sendMessage.emit({
      id: this.id,
      text: `You rated us: ${event.rating}. Thank you!`,
      type: CommandType.Rate,
    }), 500);
  }
}
