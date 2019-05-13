import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ResponseMessage } from '../../../../shared/models/response-message.model';

@Component({
  selector: 'app-complete-widget',
  templateUrl: './complete-widget.component.html',
  styleUrls: ['./complete-widget.component.scss']
})
export class CompleteWidgetComponent {
  @Input() id: number;
  @Input() buttons: string[];

  @Output() sendMessage = new EventEmitter<ResponseMessage>();

  complete(button: string): void {
    const text = button.toLowerCase() === 'yes' ? 'You close the conversation.' : 'Enter your message...';
    this.sendMessage.emit({ id: this.id, text });
  }
}
