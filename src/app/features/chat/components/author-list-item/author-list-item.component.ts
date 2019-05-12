import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-author-list-item',
  templateUrl: './author-list-item.component.html',
  styleUrls: ['./author-list-item.component.scss']
})
export class AuthorListItemComponent {
  @Input() model: string;
}
