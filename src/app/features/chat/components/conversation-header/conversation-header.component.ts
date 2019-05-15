import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-conversation-header',
  templateUrl: './conversation-header.component.html',
  styleUrls: ['./conversation-header.component.scss']
})
export class ConversationHeaderComponent {
  @Input() model: string;
  @Input() isMobile = false;

  @Output() showList = new EventEmitter<void>();
}
