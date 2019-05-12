import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-conversation-list-item',
  templateUrl: './conversation-list-item.component.html',
  styleUrls: ['./conversation-list-item.component.scss']
})
export class ConversationListItemComponent {
  @Input() model: any;
}
