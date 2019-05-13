import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-new-message-section',
  templateUrl: './new-message-section.component.html',
  styleUrls: ['./new-message-section.component.scss']
})
export class NewMessageSectionComponent {
  @Output() sendMessage = new EventEmitter<string>();

  @ViewChild('input') input: ElementRef;

  onSend(message: string): void {
    this.sendMessage.emit(message);
    this.input.nativeElement.value = '';
  }
}
