import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, ChangeDetectionStrategy, AfterViewChecked } from '@angular/core';
import { ConversationMessage } from '../../../../shared/models/conversation-message.model';
import { AuthorType } from '../../../../shared/models/author-type.enum';
import { CommandType } from '../../../../shared/models/command-type.enum';
import { ResponseMessage } from '../../../../shared/models/response-message.model';

@Component({
  selector: 'app-messages-container',
  templateUrl: './messages-container.component.html',
  styleUrls: ['./messages-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesContainerComponent implements AfterViewChecked {
  @Input() messages: ConversationMessage[] = [];

  @Output() sendMessage = new EventEmitter<ResponseMessage>();

  @ViewChild('messsageWrapper') messageContainer: ElementRef;

  AuthorType = AuthorType;
  CommandType = CommandType;

  ngAfterViewChecked(): void {
    const elem: HTMLElement = this.messageContainer.nativeElement;
    elem.scrollTop = elem.scrollHeight;
  }
}
