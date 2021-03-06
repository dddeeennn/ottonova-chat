import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ResponseMessage } from '../../../../../shared/models/response-message.model';
import { CommandType } from '../../../../../shared/models/command-type.enum';

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
    const text = button.toLowerCase() === 'yes' ? 'You closed the conversation.' : 'Enter your message...';
    this.sendMessage.emit({ id: this.id, text, type: CommandType.Complete });
  }
}
