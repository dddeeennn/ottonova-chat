import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ResponseMessage } from '../../../../shared/models/response-message.model';

@Component({
  selector: 'app-new-message-section',
  templateUrl: './new-message-section.component.html',
  styleUrls: ['./new-message-section.component.scss']
})
export class NewMessageSectionComponent {
  @Output() sendMessage = new EventEmitter<ResponseMessage>();

  @ViewChild('input') input: ElementRef;

  onSend(text: string): void {
    if (!text) {
      return;
    }

    this.sendMessage.emit({ id: Date.now(), text });
    this.input.nativeElement.value = '';
  }
}
