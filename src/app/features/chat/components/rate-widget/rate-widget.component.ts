import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ResponseMessage } from '../../../../shared/models/response-message.model';

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
    setTimeout(() => this.sendMessage.emit({ id: this.id, text: `You rate us: ${event.rating}. Thank you!` }), 500);
  }
}
