import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-complete-widget',
  templateUrl: './complete-widget.component.html',
  styleUrls: ['./complete-widget.component.scss']
})
export class CompleteWidgetComponent {
  @Input() buttons: string[];
}
